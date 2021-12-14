import React from "react";
import {ColumnsLabelItem, DataDefaultType} from "./CustomTable";

/**
 * Component displaying a data object as a row
 * @component
 * @param {Object} props The props of the component
 * @param {Object[]} props.columns The array of columns
 * @param {Object} props.subData The data to be displayed. Each key of every element must be present as
 * a value of the data key of a column element in order to be displayed
 * @returns {JSX.Element} The row of the table
 * @constructor
 */
function DataRow({columns,subData} : {columns : ColumnsLabelItem[], subData : DataDefaultType}) {
    return(
        <tr>
            {columns.map((currentCol) => (
                <td key={subData[currentCol.label]}>{subData[currentCol.label]}</td>
            ))}
        </tr>
    )
}

export default DataRow