import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Feed } from '../src/components/Feed';
import { API_URL } from '../src/constants/api';
import { Stories } from '../src/types/story';

export const getServerSideProps: GetServerSideProps<{ initialData: Stories }> = async () => {
  let stories: Stories = [];

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('API Error');
    }

    stories = await response.json();
  } catch (error) {
    console.error('There was an error with getServerSideProps API call.'); // Sentry log
  }

  return {
    props: {
      initialData: stories,
    },
  };
};

export default function Home({
  initialData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
        <Feed initialData={initialData} />
      </main>

      <footer className="flex justify-center items-center w-full py-5 border-t border-[#eaeaea]">
        &copy; Barstool Sports
      </footer>
    </div>
  );
}
