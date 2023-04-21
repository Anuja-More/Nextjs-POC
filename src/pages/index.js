import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
const ProductCard = dynamic(() => import('@/components/Card'));
import styles from '@/assets/styles/main/Home.module.scss';

const inter = Inter({ subsets: ['latin'] });

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products?limit=20');
  const data = await res.json();
  return { props: { data } };
}

export default function Home({ data }) {
  const { data: session } = useSession();

  if (session === null) {
    return <button onClick={signIn}>Login</button>;
  }

  return (
    <>
      <Head>
        <title>ecom with next</title>
        <meta
          name="description"
          content="next js app with next-auth , firbase-auth, slug, local fonts, eslint, sass"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript next-auth , firbase-auth, slug, local fonts, eslint, sass, next"
        />
        <meta name="author" content="Anuja More" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>Hello, {session?.user?.name}</div>
      <button onClick={signOut}>Logout</button>
      <div className={styles.productWrapper}>
        {data?.map((product) => (
          <ProductCard key={product?.id} {...product} />
        ))}
      </div>
    </>
  );
}
