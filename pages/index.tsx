import Head from 'next/head';
import Image from 'next/image';
import { Feed } from '../src/components/Feed';

export default function Home() {
  return (
    <div className="max-w-xl mx-auto py-4">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Barstool Sports</title>
      </Head>

      <header className="px-4 flex justify-center">
        <a href="https://www.barstoolsports.com/">
          <Image alt="Barstool Sports" height="64" priority src="/logo.png" width="200" />
        </a>
      </header>
      <main>
        <Feed />
      </main>

      <footer className="flex justify-center items-center w-full py-5 border-t border-[#eaeaea]">
        &copy; Barstool Sports
      </footer>
    </div>
  );
}
