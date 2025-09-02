import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {CompanyProfile} from "../../company";
import {getCompanyProfile} from "../../api.tsx";
import Sidebar from "../../Components/Sidebar/Sidebar.tsx";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard.tsx";
import Tile from "../../Components/Tile/Tile.tsx";

interface Props {

}

const CompanyPage = (props: Props) => {
    let {ticker} = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        }
        getProfileInit();
    }, []);

    return (<>
            {company ? (
                <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                    <Sidebar/>
                    <CompanyDashboard>
                        <Tile title="Company Name" subTitle={company.companyName}/>
                    </CompanyDashboard>
                </div>
            ) : (
                <div>Company not found!</div>
            )}
        </>
    );
};

export default CompanyPage;