import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement.tsx";
import DesignGuide from "../Pages/DesignGuide/DesignGuide.tsx";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "design-guide",
                element: <DesignGuide />
            },
            {
                path: "company/:ticker",
                element: <CompanyPage />,
                children: [
                    {
                        path: "company-profile",
                        element: <CompanyPage />
                    },
                    {
                        path: "income-statement",
                        element: <IncomeStatement />
                    },
                    {
                        path: "balance-sheet",
                        element: <BalanceSheet />
                    },
                ]
            },
        ],
    },
]);