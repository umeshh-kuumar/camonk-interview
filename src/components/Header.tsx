export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-lg">CA Monk Blog</h1>
        <button className="bg-primary text-white px-4 py-1 rounded-md">
          Profile
        </button>
      </div>
    </header>
  )
}