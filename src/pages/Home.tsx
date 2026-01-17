// import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
// import BlogList from "../components/BlogList.tsx"
// import BlogDetail from "../components/BlogDetails.tsx"
import CreateBlogForm from "../components/CreateBlogForm.tsx"

export default function Home() {
//   const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-4">
          <CreateBlogForm />
          {/* <BlogList onSelect={setSelectedId} /> */}
        </aside>
        <section className="lg:col-span-8">
          {/* <BlogDetail id={selectedId} /> */}
        </section>
      </main>
      <Footer />
    </>
  )
}
