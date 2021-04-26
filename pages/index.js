import Head from 'next/head'
import SearchIcon from '../src/icons/search'

export default function Home() {
  return (
    <div className={`bg-gray-100 min-h-screen`}>
      <Head>
        <title>Filter Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`container m-auto pt-6`}>
        <header className={`w-full`}>
          <button>
            <SearchIcon className={`fill-current text-gray-800 inline-block mr-2`} />
            <span>Manage Filters</span>
          </button>
        </header>
      </main>
    </div>
  )
}
