import React, {useState, useEffect} from 'react'
import searchStore from '../redux/searchStore'

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState('')

  const handleSearchChange = (event) => {
    event.preventDefault()
    setSearchWord(event.target.value)
  }

  useEffect(() => {
    searchStore.dispatch({
      type: 'UPDATE_SEARCH',
      data: {
        search: searchWord
      }
    })
  }, [searchWord])
  
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Search..." onChange={handleSearchChange} />
      </form>
    </div>
  )
}

export default SearchBar