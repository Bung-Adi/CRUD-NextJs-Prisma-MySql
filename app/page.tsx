import Link from "next/link"

const Home = () => {
  return <div className="flex flex-col justify-center content-center items-center w-full h-screen">
    <h1>CRUD apps using Prisma</h1>
    <Link href="/products" className="mt-4">
      <button className="btn">Products</button>
    </Link>
  </div>
}
export default Home