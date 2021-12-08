import CustomTable from "./Components/CustomTable";
import {columnsLabels, generatedData} from "./data/data";
import {bigColumns, bigRandomNumber} from "./data/bigData";
import React from "react";

function App() {

  return (
      <>
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
