import { useState } from "react"

export default function Search({ tasks, setSearchResults }) {
  const [search, setSearch] = useState();
  const searchValue = (e) => {
    setSearch(e.target.value)
    let storeAllMatchMovie = tasks.filter(task => {
      let getName = ((task.title).toLowerCase()).replaceAll(' ', '');
      return getName.includes(search)
    })
    setSearchResults(storeAllMatchMovie);
  }
  return (
    <div className='flex justify-end px-8 py-4'>
      <div className='flex flex-col gap-2'>
        <h2 className="text-lg font-semibold text-gray-700">Search Task:</h2>
        <div className='flex gap-3 items-center'>
          <input
            type="text"
            placeholder="Enter the task to search..."
            className="w-80 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={searchValue}
            value={search}
          />
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg cursor-pointer font-semibold hover:bg-blue-600 transition-colors">
            Search
          </button>
          <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg cursor-pointer font-semibold hover:bg-gray-400"
            onClick={() => setSearch('')}>
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}