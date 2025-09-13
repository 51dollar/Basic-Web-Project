import type {CompanyCashFlow} from "../../company";
import {useOutletContext} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCashFlowStatement} from "../../api.tsx";
import Table from "../Table/Table.tsx";

const config = [
    {
        label: "Date",
        render: (company: CompanyCashFlow) => company.date,
    },
    {
        label: "Operating Cash Flow",
        render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
        label: "Investing Cash Flow",
        render: (company: CompanyCashFlow) => company.netCashProvidedByInvestingActivities,
    },
    {
        label: "Financing Cash Flow",
        render: (company: CompanyCashFlow) => company.netCashProvidedByFinancingActivities,
    },
    {
        label: "Cash At End of Period",
        render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
    },
    {
        label: "CapEx",
        render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
        label: "Issuance Of Stock",
        render: (company: CompanyCashFlow) => company.commonStockIssuance,
    },
    {
        label: "Free Cash Flow",
        render: (company: CompanyCashFlow) => company.freeCashFlow,
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
                <h1>No results!</h1>
            )}
        </>
    );
};

export default CashFlowStatement;