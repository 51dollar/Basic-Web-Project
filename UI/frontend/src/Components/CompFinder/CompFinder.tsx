import {useEffect, useState} from "react";
import type {CompanyCompData} from "../../company";
import {getCompData} from "../../api.tsx";
import CompFinderItem from "./CompFinderItem/CompFinderItem.tsx";

type Props = {
    ticker: string;
}

const CompFinder = ({ticker}: Props) => {
    const [companyData, setCompanyData] = useState<CompanyCompData>();
    useEffect(() => {
        const getComps = async () => {
            const value = await getCompData(ticker);
            setCompanyData(value?.data[0]);
        }
        getComps();
    }, [ticker]);
    return (
        <>
            <span className="inline-flex m-6">Stock Peers</span>
            {companyData ? (
                <CompFinderItem
                    ticker={companyData.symbol}
                    companyName={companyData.companyName}
                    price={companyData.price}
                    mktCap={companyData.mktCap}
                />
            ) : (
                <span>Not found!</span>
            )}
        </>
    );
};

export default CompFinder;