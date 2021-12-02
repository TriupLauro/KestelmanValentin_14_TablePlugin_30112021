import CustomTable from "./Components/CustomTable";
import {columnsLabels, generatedData} from "./data/data";

function App() {

  return (
    <CustomTable
        columns={columnsLabels} data={generatedData}
    />
  )
}

export default App
