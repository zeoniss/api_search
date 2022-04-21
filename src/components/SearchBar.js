import axios from "axios"
import { useState } from "react"
import Results from "./Results"

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("")
  const [repos, setRepos] = useState([])

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  const handleClick = async () => {
    console.log(searchInput)
    try {
      const result = await axios(
        `https://api.github.com/users/${searchInput}/repos`
      )
      setRepos(result)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(repos)
  return (
    <>
      <div
        style={{
          padding: 20,
        }}
      >
        <input
          type='text'
          placeholder='search'
          value={searchInput}
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Search</button>
      </div>
      <Results repos={repos} />
    </>
  )
}

export default SearchBar
