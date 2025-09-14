import type {CompanyCashFlow} from "../../company";
import {useOutletContext} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCashFlowStatement} from "../../api.tsx";
import Table from "../Table/Table.tsx";
import Spinner from "../Spinner/Spinner.tsx";
import {formatLargeMonetaryNumber} from "../../Helpers/NumberFormatting.tsx";

const config = [
    {
        label: "Date",
        render: (company: CompanyCashFlow) => company.date,
    },
    {
        label: "Operating Cash Flow",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.operatingCashFlow),
    },
    {
        label: "Investing Cash Flow",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.netCashProvidedByInvestingActivities),
    },
    {
        label: "Financing Cash Flow",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.netCashProvidedByFinancingActivities),
    },
    {
        label: "Cash At End of Period",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
    },
    {
        label: "CapEx",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.capitalExpenditure),
    },
    {
        label: "Issuance Of Stock",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.commonStockIssuance),
    },
    {
        label: "Free Cash Flow",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.freeCashFlow),
    },
];

const CashFlowStatement = () => {
    const ticker = useOutletContext<string>();
    const [cashFlowData, setCashFlow] = useState<CompanyCashFlow[]>();
    useEffect(() => {
        const fetchCashFlow = async () => {
            const result = await getCashFlowStatement(ticker!);
            setCashFlow(result!.data);
        };
        fetchCashFlow();
    }, []);
    return (
        <>
            {cashFlowData ? (
                <Table
                    config={config}
                    data={cashFlowData}
                />
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default CashFlowStatement;