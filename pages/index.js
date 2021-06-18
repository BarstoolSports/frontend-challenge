import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='container'>
        <Head>
          <title>Barstool Sports</title>
        </Head>

        <header className='header'>
          <Image
            src='/logo.png'
            alt='Barstool Sports'
            width='200'
            height='64'
          />
        </header>
        <main className='main'>
          {/* <Feed /> goes here */}
        </main>

        <footer className='footer'>&copy; Barstool Sports</footer>
      </div>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: auto;
          padding-left: 15px;
          padding-right: 15px;
        }
        .header {
          padding: 15px 0;
          display: flex;
          justify-content: center;
        }
        .footer {
          width: 100%;
          padding: 20px 0;
          margin-top: 40px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}