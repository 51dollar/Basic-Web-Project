import type {CompanyBalanceSheet} from "../../company";
import {useOutletContext} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBalanceSheet} from "../../api.tsx";
import RatioList from "../RatioList/RatioList.tsx";
import Spinner from "../Spinner/Spinner.tsx";
import {formatLargeMonetaryNumber} from "../../Helpers/NumberFormatting.tsx";

const config = [
    {
        label: "Cash",
        render: (company: CompanyBalanceSheet) => formatLargeMonetaryNumber(company.cashAndCashEquivalents),
    },
    {
        label: "Inventory",
        render: (company: CompanyBalanceSheet) => formatLargeMonetaryNumber(company.inventory),
    },
    {
        label: "Other Current Assets",
        render: (company: CompanyBalanceSheet) => formatLargeMonetaryNumber(company.otherCurrentAssets),
    },
    {
        label: "Other Non-Current Assets",
        render: (company: CompanyBalanceSheet) => formatLargeMonetaryNumber(company.otherNonCurrentAssets),
    },
    {
        label: "Long Term Debt",
        render: (company: CompanyBalanceSheet) => formatLargeMonetaryNumber(company.longTermDebt),
    },
    {
        label: "Total Debt",
        render: (company: CompanyBalanceSheet) => formatLargeMonetaryNumber(company.totalDebt),
    },
];


const BalanceSheet = () => {
    const ticker = useOutletContext<string>();
    const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();
    useEffect(() => {
        const getData = async () => {
            const value = await getBalanceSheet(ticker!);
            setBalanceSheet(value?.data[0]);
        }
        getData();
    }, []);

    return (
        <>
            {balanceSheet ? (
                <RatioList
                    config={config}
                    data={balanceSheet}
                />
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default BalanceSheet;