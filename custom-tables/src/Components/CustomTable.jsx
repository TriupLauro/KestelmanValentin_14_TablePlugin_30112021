import React, {useState} from "react";
import "../Styles/CustomTable.css"
import HeaderElement from "./HeaderElement";
import DataRow from "./DataRow";

function CustomTable({data, columns}) {
    const firstColLabel = columns[0].data

    const [currentSorting, setCurrentSorting] = useState(`${firstColLabel} asc`)

    const [sortingData, sortDirection] = currentSorting.split(' ')

    function typeOfData(subData) {
        if (isFinite(new Date(subData))) return 'date'

        if (isNaN((subData))) return 'text'

        if (!isNaN(subData)) return 'number'

        return 'unknown'
    }
    /*for (const currentData of data) {
        const keysNumber = Object.keys(currentData).length
        if (keysNumber !== columns.length) {
            console.warn("Number of columns doesn't match")
            break
        }
    }*/

    console.log('Type of data', typeOfData(data[0][sortingData]))

    function sortData(dataset, sortingColumn, direction) {
        const sortType = typeOfData(dataset[0][sortingColumn])

        dataset.sort((a,b) => {
            if (sortType === 'number') {
                if (direction === 'asc') {
                    return parseInt(a[sortingColumn]) - parseInt(b[sortingColumn])
                }
                if (direction === 'desc') {
                    return parseInt(b[sortingColumn]) - parseInt(a[sortingColumn])
                }
            }

            if (sortType === 'text') {
                if (direction === 'asc') {
                    if (a[sortingColumn].toLowerCase() < b[sortingColumn].toLowerCase()) {
                        return -1
                    }
                    if (a[sortingColumn].toLowerCase() > b[sortingColumn].toLowerCase()) {
                        return 1
                    }
                    return 0
                }
                if (direction === 'desc') {
                    if (a[sortingColumn].toLowerCase() > b[sortingColumn].toLowerCase()) {
                        return -1
                    }
                    if (a[sortingColumn].toLowerCase() < b[sortingColumn].toLowerCase()) {
                        return 1
                    }
                    return 0
                }
            }

            if (sortType === 'date') {
                if (direction === 'asc') {
                    if (new Date(a[sortingColumn]) < new Date(b[sortingColumn])) {
                        return -1
                    }
                    if (new Date(a[sortingColumn]) > new Date(b[sortingColumn])) {
                        return 1
                    }
                    return 0
                }

                if (direction === 'desc') {
                    if (new Date(a[sortingColumn]) > new Date(b[sortingColumn])) {
                        return -1
                    }
                    if (new Date(a[sortingColumn]) < new Date(b[sortingColumn])) {
                        return 1
                    }
                    return 0
                }

            }
        })
        return dataset
    }

    sortData(data, sortingData, sortDirection)

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