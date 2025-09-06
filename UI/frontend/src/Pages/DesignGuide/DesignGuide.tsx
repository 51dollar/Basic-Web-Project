import Table from "../../Components/Table/Table.tsx";
import RatioList from "../../Components/RatioList/RatioList.tsx";

const DesignGuide = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-3xl font-bold mb-4">Design Guide</h1>
            <h2 className="text-lg mb-6">
                This is design pages guide. <br />
                This is where we will house various design aspects of the app.
            </h2>
            <RatioList />
            <Table />
            <h3 className="text-base mt-6">
                Table – Table takes in a configuration object and company data as params.
                Use the config to style your table.
            </h3>
        </div>
    );
};

export default DesignGuide;