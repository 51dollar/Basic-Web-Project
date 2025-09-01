import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import {type ChangeEvent, type SyntheticEvent, useState} from "react";
import type {CompanySearch} from "./company";
import {searchCompanies} from "./api.tsx";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio.tsx";
import Hero from "./Components/Hero/Hero.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";

function App() {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        const exists = portfolioValues.find((value) => value === e.target[0].value);
        if (exists) return;
        const updatedPortfolio = [...portfolioValues, e.target[0].value];
        setPortfolioValues(updatedPortfolio);
    };

    const onPortfolioDelete = (e: any) => {
        e.preventDefault();
        const removed = portfolioValues.filter((value) => {
            return value !== e.target[0].value;
        });
        setPortfolioValues(removed);
    };

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setSearchResult(result.data);
        }
    };

    return (
        <>
            <Navbar/>
            <Hero/>
            <Search
                onSearchSubmit={onSearchSubmit}
                search={search}
                handleSearchChange={handleSearchChange}
            />
            <ListPortfolio
                portfolioValues={portfolioValues}
                onPortfolioDelete={onPortfolioDelete}
            />
            <CardList
                searchResult={searchResult}
                onPortfolioCreate={onPortfolioCreate}
            />

            {serverError && <div>Unable to connect to API</div>}
        </>
    );
}

export default App
