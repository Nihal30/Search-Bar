
import { useState } from 'react'
import './App.css'
import SearchBar from './component/SearchBar'
import SearchResults from './component/SearchResults'

function App() {
  const [results, setResults] = useState([])


  return (
    <div className='App' >
    <div className='search-bar-container' >
    <h1 className='h1' > REACT SEARCT BAR</h1>
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
    </div>

    </div>
  )
}

export default App
