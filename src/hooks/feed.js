import { useState } from 'react'
import { API_URL } from '../constants'

const useFeed = (initialData) => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [data, setData] = useState(initialData)

  const loadMore = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_URL}?page=${page + 1}`)
      const nextData = await response.json()
      setData(dedupe([...data, ...nextData]))
      setPage(page + 1)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  const refresh = async () => {
    setLoading(true)
    try {
      const response = await fetch(API_URL)
      const nextData = await response.json()
      const newData = nextData.filter((d) => new Date(d.date) > new Date(data[0].date))
      setData(dedupe([...newData, ...data]))
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  function dedupe (data) {
    const seen = new Set()
    return data.filter(item => {
      const isDuplicate = seen.has(item.id)
      seen.add(item.id)
      return !isDuplicate
    })
  }

  return { loadMore, refresh, loading, data }
}

export default useFeed
