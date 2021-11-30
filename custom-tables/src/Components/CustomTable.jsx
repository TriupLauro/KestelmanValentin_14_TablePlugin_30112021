import React, {useState} from "react";
import "../Styles/CustomTable.css"
import HeaderElement from "./HeaderElement";
import DataRow from "./DataRow";

function CustomTable({data, columns}) {
    const [currentSorting, setCurrentSorting] = useState()

    /*for (const currentData of data) {
        const keysNumber = Object.keys(currentData).length
        if (keysNumber !== columns.length) {
            console.warn("Number of columns doesn't match")
            break
        }
    }*/

    const firstColLabel = columns[0].data

    return (
        <table className="main-table">
            <thead className="table-header">
                <tr>
                    {columns.map(currentCol => (
                        <HeaderElement
                            key={currentCol.data}
                            title={currentCol.title} data={currentCol.data}
                            currentSorting={currentSorting} setCurrentSorting={setCurrentSorting}
                        />
                    ))}
                </tr>
            </thead>

            <tbody>
            {data.map(currentData => (
                <DataRow columns={columns} subData={currentData} key={currentData[firstColLabel]}/>
            ))}
            </tbody>
        </table>
    )
}

export default CustomTable