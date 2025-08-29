import CardPortfolio from "../CardPortfolio/CardPortfolio.tsx";

interface Props {
    portfolioValues: string[];
}

const ListPortfolio = ({portfolioValues}: Props) => {
    return (
        <>
            <h3>My Portfolio</h3>
            <ul>
                {portfolioValues && portfolioValues.map((portfolioValues) => {
                    return <CardPortfolio portfolioValues={portfolioValues}/>;
                })}
            </ul>
        </>
    );
};

export default ListPortfolio;