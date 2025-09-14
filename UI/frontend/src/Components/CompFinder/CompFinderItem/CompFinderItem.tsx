import {Link} from "react-router-dom";

type Props = {
    ticker: string;
    companyName: string;
    price: number;
    mktCap: number;
};

const CompFinderItem = ({ticker, companyName, price, mktCap}: Props) => {
    return (
        <div className="inline-flex rounded-md shadow-sm m-4">
            <Link
                reloadDocument
                to={`/company/${ticker}/company-profile`}
                type="button"
                className="inline-flex items-center gap-4 p-2 rounded-l-lg"
            >
                <span>{ticker}</span>
                <span>Company: {companyName}</span>
                <span>Price: {price}</span>
                <span>Market Cap: {mktCap}</span>
            </Link>
        </div>
    );
};

export default CompFinderItem;