import axios, { isAxiosError } from "axios";
import type { CompanySearch } from "./company"

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const response = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${import.meta.env.VITE_API_KEY}`
        );
        return response.data;
    }
    catch (error) {
        if (isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        }
        else {
            console.log("unexpected error: ", error);
            return "An expected error has occurred.";
        }
    }
};