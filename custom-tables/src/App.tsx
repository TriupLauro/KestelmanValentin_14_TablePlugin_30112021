import CustomTable from "./Components/CustomTable";
import {columnsLabels, contentData, generatedData} from "./data/data";
import {bigColumns, bigRandomNumber} from "./data/bigData";
import React from "react";

function App() {

    return (
        <>
            <CustomTable
                data={contentData} columns={columnsLabels}
            />
            <CustomTable
                columns={columnsLabels} data={generatedData}
            />
            <CustomTable
                columns={bigColumns} data={bigRandomNumber}
            />
        </>
    )
}

export default App
