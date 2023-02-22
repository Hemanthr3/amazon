import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className="mx-auto max-w-screen-xl">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
let products = await getProducts();
  return {
    props: {
      products,
    },
  };
}

// async function getProducts() {
//   try {
//     const res = await fetch();
//   } catch (e) {
//     console.log(e);
//   }
// }
