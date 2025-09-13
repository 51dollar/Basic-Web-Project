import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {CompanyProfile} from "../../company";
import {getCompanyProfile} from "../../api.tsx";
import Sidebar from "../../Components/Sidebar/Sidebar.tsx";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard.tsx";
import Tile from "../../Components/Tile/Tile.tsx";

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
                            subTitle={company.price.toString()}
                        />
                        <Tile
                            title="Market Cap"
                            subTitle={company.marketCap.toString()}
                        />
                        <Tile
                            title="Sector"
                            subTitle={company.sector}
                        />
                        <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m4">
                            {company.description}
                        </p>
                    </CompanyDashboard>
                </div>
            ) : (
                <div>Company Not Found!</div>
            )}
        </>
    );
};

export default CompanyPage;