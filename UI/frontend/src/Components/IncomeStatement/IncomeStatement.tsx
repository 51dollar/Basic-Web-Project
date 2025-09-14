import type {CompanyIncomeStatement} from "../../company";
import {useOutletContext} from "react-router-dom";
import {useEffect, useState} from "react";
import {getIncomeStatement} from "../../api.tsx";
import Table from "../Table/Table.tsx";
import Spinner from "../Spinner/Spinner.tsx";
import {formatLargeMonetaryNumber, formatRatio} from "../../Helpers/NumberFormatting.tsx";

const configs = [
    {
        label: "Date",
        render: (company: CompanyIncomeStatement) => company.date,
    },
    {
        label: "Revenue",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.revenue),
    },
    {
        label: "Cost Of Revenue",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.costOfRevenue),
    },
    {
        label: "Depreciation",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.depreciationAndAmortization),
    },
    {
        label: "Operating Income",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.operatingIncome),
    },
    {
        label: "Income Before Taxes",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.incomeBeforeTax),
    },
    {
        label: "Net Income",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.netIncome),
    },
    {
        label: "Earnings Per Share",
        render: (company: CompanyIncomeStatement) => formatRatio(company.eps),
    },
    {
        label: "Earnings Per Diluted",
        render: (company: CompanyIncomeStatement) => formatRatio(company.epsDiluted),
    },
    {
        label: "Weighted Average Shares Outstanding",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.weightedAverageShsOut),
    },
    {
        label: "Weighted Average Shares Outstanding Diluted",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.weightedAverageShsOutDil),
    },
];

const IncomeStatement = () => {
    const ticker = useOutletContext<string>();
    const [incomeStatement, setIncomeStatement] = useState<CompanyIncomeStatement>();
    useEffect(() => {
        const incomeStatmentFetch = async () => {
            const result = await getIncomeStatement(ticker);
            setIncomeStatement(result!.data);
        };
        incomeStatmentFetch();
    }, []);
    return (
        <>
            {incomeStatement ? (<>
                <Table
                    config={configs}
                    data={incomeStatement}
                />
            </>) : (
                <Spinner />
            )}
        </>
    );
};

export default IncomeStatement;