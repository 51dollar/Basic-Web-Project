import type {CompanyKeyMetrics} from "../../company";
import {useOutletContext} from "react-router-dom";
import {useEffect, useState} from "react";
import {getKeyMetrics} from "../../api.tsx";
import RatioList from "../RatioList/RatioList.tsx";
import Spinner from "../Spinner/Spinner.tsx";
import {formatLargeNonMonetaryNumber, formatRatio} from "../../Helpers/NumberFormatting.tsx";

const tableConfig = [
    {
        label: "Market Cap",
        render: (company: CompanyKeyMetrics) => formatLargeNonMonetaryNumber(company.marketCap),
        subTitle: "Total value of all a company's shares of stock",
    },
    {
        label: "Enterprise Value",
        render: (company: CompanyKeyMetrics) => formatLargeNonMonetaryNumber(company.enterpriseValue),
        subTitle: "Measure of a company's total value, often used as a more comprehensive alternative to equity market cap",
    },
    {
        label: "Current Ratio",
        render: (company: CompanyKeyMetrics) => formatRatio(company.currentRatio),
        subTitle: "Measures the company's ability to pay short term debt obligations",
    },
    {
        label: "Return On Equity",
        render: (company: CompanyKeyMetrics) => formatRatio(company.returnOnEquity),
        subTitle: "Return on equity is the measure of a company's net income divided by its shareholder's equity",
    },
    {
        label: "Return On Assets",
        render: (company: CompanyKeyMetrics) => formatRatio(company.returnOnAssets),
        subTitle: "Return on assets is the measure of how effective a company is using its assets",
    },
    {
        label: "Enterprise Value to Free Cash Flow",
        render: (company: CompanyKeyMetrics) => formatRatio(company.evToFreeCashFlow),
        subTitle: "Shows how much a company is worth relative to its cash flow after capital expenditures",
    },
    {
        label: "Free Cash Flow Yield",
        render: (company: CompanyKeyMetrics) => formatRatio(company.freeCashFlowYield),
        subTitle: "Free cash flow per share relative to market price per share",
    },
    {
        label: "Graham Number",
        render: (company: CompanyKeyMetrics) => formatRatio(company.grahamNumber),
        subTitle: "The maximum price a defensive investor should pay for a stock",
    },
    {
        label: "Graham Net-Net",
        render: (company: CompanyKeyMetrics) => formatRatio(company.grahamNetNet),
        subTitle: "Net current asset value per share according to Benjamin Graham’s formula",
    },
    {
        label: "Net Debt to EBITDA",
        render: (company: CompanyKeyMetrics) => formatRatio(company.netDebtToEBITDA),
        subTitle: "Shows how many years it would take to pay back debt if net debt and EBITDA are held constant",
    },
    {
        label: "Operating Cycle",
        render: (company: CompanyKeyMetrics) => formatRatio(company.operatingCycle),
        subTitle: "Average time between purchasing inventory and collecting cash from sales",
    },
    {
        label: "Cash Conversion Cycle",
        render: (company: CompanyKeyMetrics) => formatRatio(company.cashConversionCycle),
        subTitle: "Time it takes to convert investments in inventory into cash flows from sales",
    },
];


const CompanyProfile = () => {
    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
    useEffect(() => {
        const getCompanyKeyRatios = async () => {
            const value = await getKeyMetrics(ticker);
            setCompanyData(value?.data[0]);
        };
        getCompanyKeyRatios();
    }, []);
    return (
        <>
            {companyData ? (
                <>
                    <RatioList
                        config={tableConfig}
                        data={companyData}
                    />
                </>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default CompanyProfile;