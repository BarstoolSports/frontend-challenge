import Head from 'next/head'
import Image from 'next/image'
import Feed from '../src/components/Feed'

export default function Home() {
  return (
    <div className="max-w-xl mx-auto py-4">
      <Head>
        <title>Barstool Sports</title>
      </Head>

      <header className="px-4 flex justify-center">
        <Image src="/logo.png" alt="Barstool Sports" width="200" height="64" />
      </header>
      <main>{
          <Feed />
      }</main>

      <footer className="flex justify-center items-center w-full py-5 mt-10 border-t border-[#eaeaea]">
        &copy; Barstool Sports
      </footer>
    </div>
  )
}
