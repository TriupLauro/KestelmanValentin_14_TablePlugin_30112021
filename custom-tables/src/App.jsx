import CustomTable from "./Components/CustomTable";
import {columnsLabels, contentData} from "./data/data";

function App() {

  return (
    <CustomTable
        columns={columnsLabels} data={contentData}
    />
  )
}

export default App
