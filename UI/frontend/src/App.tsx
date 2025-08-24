import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import {type ChangeEvent, type SyntheticEvent, useState} from "react";
import type {CompanySearch} from "./company";
import {searchCompanies} from "./api.tsx";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [searchError, setSearchError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
      const result = await searchCompanies(search);
      if (typeof result === "string") {
          setSearchError(result);
      }
      else if (Array.isArray(result.data)) {
          setSearchResult(result.data);
      }
      console.log(searchResult);
  };

  return (
    <>
      <div>
        <Search onClick={onClick} search={search} handleChange={handleChange} />
        <CardList />
      </div>
    </>
  )
}

export default App
