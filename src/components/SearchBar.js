import React, {useState} from 'react'

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState('')

  const handleSearchChange = (event) => {
    setSearchWord(event.target.value)
  }
    return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Search..." onChange={handleSearchChange} />
      </form>
    </div>
  )
}

export default SearchBar