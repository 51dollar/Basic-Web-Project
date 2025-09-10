import axios, {isAxiosError} from "axios";
import type {CompanyKeyMetrics, CompanyProfile, CompanySearch} from "./company"

export interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${import.meta.env.VITE_API_KEY}`
        );
        return data;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An expected error has occurred.";
        }
    }
};

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${import.meta.env.VITE_API_KEY}`
        )
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
        return error.message;
    }
};

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://https://financialmodelingprep.com/stable//key-metrics?symbol=${query}&apikey=${import.meta.env.VITE_API_KEY}`
        )
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
        return error.message;
    }
};