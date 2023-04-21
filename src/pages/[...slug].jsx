import Link from 'next/Link';
// import { localFont } from 'next/font';
import { useRouter } from 'next/router';
import ProductCard from '@/components/Card';
import styles from "../assets/styles/main/Card.module.scss"
import Custom404 from "./404"

// const myFont = localFont({
//     name: 'Gotham',
//     file: '../assets/fonts/Gotham-Black.woff',
//   });
export default function ProductPage({ data, product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Custom404/>;
  }

  if (product) {
    return (
      <>
      
        <div>
          <img style={{ height: '300px' }} src={product.image} />
          <div>
            <h2>
              {product.title} ({product.id})
            </h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>{product.category}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
        </div>
      </>
    );
  }

  if (data) {
    return (
      <>
        <h3>
          <Link href="/" className='Link'>
            Go back to Home Page
          </Link>
          <div>Products</div>
        </h3>
        <div className={styles.cardgrid}>
          {data.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </>
    );
  }

  return <div>No data found</div>;
}

export async function getServerSideProps({ params: { slug } }) {
  if (slug.length === 1) {
    if (slug[0] === 'electronics') {
      const res = await fetch(
        'https://fakestoreapi.com/products/category/electronics?limit=100'
      );
      const data = await res.json();
      // res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
      return { props: { data } };
    } else if (slug[0] === 'jewelery') {
      const res = await fetch(
        'https://fakestoreapi.com/products/category/jewelery?limit=100'
      );
      const data = await res.json();
      return { props: { data } };
    }
  } else if (slug.length === 2) {
    const res = await fetch(
      `https://fakestoreapi.com/products/${slug[1]}`
    );
    const product = await res.json();
    return { props: { product } };
  }

  return { props: {} };
}


