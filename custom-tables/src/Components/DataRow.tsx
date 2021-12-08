import React from "react";
import {anyKeyOfStringOrNumber, columnsLabelsItem} from "../data/data";

/**
 * Component displaying a data object as a row
 * @component
 * @param {Object[]} columns The array of columns
 * @param {string} columns[].data The string corresponding to the key of each subData element
 * @param {Object} subData The data to be displayed. Each key of every element must be present as
 * a value of the data key of a columns element
 * @returns {JSX.Element} The row of the table
 * @constructor
 */
function DataRow({columns,subData} : {columns : columnsLabelsItem[], subData : anyKeyOfStringOrNumber}) {
    return(
        <tr>
            {columns.map((currentCol) => (
                <td key={subData[currentCol.label]}>{subData[currentCol.label]}</td>
            ))}
        </tr>
    )
}

export default DataRow