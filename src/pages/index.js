import { Inter } from 'next/font/google'
import ProductCard from '@/components/Card'
import {useSession, signIn, signOut} from 'next-auth/react'
export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products?limit=20')
  const data = await res.json()
  return { props: { data } }
}
//  import styles from '@/styles/Home.module.scss'
import styles from "@/assets/styles/main/Home.module.scss";

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  const session = useSession()
  if(session.data === null)return(
    <button onClick={signIn}>Login</button>
  )
  return (
    <>
    <div>Hello, {session?.data?.user?.name}</div>
    <button onClick={signOut}>Logout</button>
     <div className={styles.productWrapper}>
      {data?.map(product => <ProductCard key={product?.id} {...product} />)}
    </div>
    </>
  )
}
