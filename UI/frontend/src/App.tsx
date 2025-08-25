import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import {type ChangeEvent, type SyntheticEvent, useState} from "react";
import type {CompanySearch} from "./company";
import {searchCompanies} from "./api.tsx";

function App() {
    const [search, setSearch] = useState<string>("");
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onClick = async (e: SyntheticEvent) => {
        const result = await searchCompanies(search);
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setSearchResult(result.data);
        }
    };

    return (
        <div className="App">
            <Search onClick={onClick} search={search} handleChange={handleChange}/>
            <CardList searchResult={searchResult}/>
            {serverError && <div>Unable to connect to API</div>}
        </div>
    );
}

export default App
