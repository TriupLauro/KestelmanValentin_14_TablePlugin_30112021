import React from "react";

function DataRow({columns,subData}) {
    return(
        <tr>
            {columns.map((currentCol) => (
                <td key={subData[currentCol.data]}>{subData[currentCol.data]}</td>
            ))}
        </tr>
    )
}

export default DataRow