import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {CompanyProfile} from "../../company";
import {getCompanyProfile} from "../../api.tsx";
import Sidebar from "../../Components/Sidebar/Sidebar.tsx";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard.tsx";
import Tile from "../../Components/Tile/Tile.tsx";
import Spinner from "../../Components/Spinner/Spinner.tsx";
import CompFinder from "../../Components/CompFinder/CompFinder.tsx";
import {formatLargeMonetaryNumber} from "../../Helpers/NumberFormatting.tsx";

const CompanyPage = () => {
    let {ticker} = useParams();

    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        };
        getProfileInit();
    }, []);

    return (
        <>
            {company ? (
                <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                    <Sidebar />
                    <CompanyDashboard ticker={ticker!}>
                        <Tile
                            title="Company Name"
                            subTitle={company.companyName}
                        />
                        <Tile
                            title="Price"
                            subTitle={"$" + company.price.toString()}
                        />
                        <Tile
                            title="Market Cap"
                            subTitle={formatLargeMonetaryNumber(company.marketCap)}
                        />
                        <Tile
                            title="Sector"
                            subTitle={company.sector}
                        />
                        <CompFinder ticker={company.symbol} />
                        <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m4">
                            {company.description}
                        </p>
                    </CompanyDashboard>
                </div>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default CompanyPage;