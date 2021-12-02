import React, {useState} from "react";
import "../Styles/CustomTable.css"
import HeaderElement from "./HeaderElement";
import DataRow from "./DataRow";

function CustomTable({data, columns}) {

    const [entriesDisplayed, setEntriesDisplayed] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    function onSelectEntriesDisplayed(e) {
        setEntriesDisplayed(e.target.value)
    }

    if (!data) return (
        <>
            <div className="main-table-wrapper">
                <div className="options-wrapper">
                    <div className="page-length-wrapper">
                        <select id="page-length" value={entriesDisplayed} onChange={onSelectEntriesDisplayed}>
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <label htmlFor="page-length"> entries per page</label>
                    </div>
                    <div className="search-wrapper">
                        <label>Search : </label>
                        <input type="text" />
                    </div>
                </div>
                <table className="empty-table">
                    No data available
                </table>
            </div>
        </>
    )


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

    function onClickingNext() {
        setCurrentPage(currentPage + 1)
    }

    function onClickingPrevious() {
        setCurrentPage(currentPage - 1)
    }

    const lastEntryIndex = data.length - 1
    const lastEntryDisplayedIndex = Math.min((currentPage)*entriesDisplayed, lastEntryIndex + 1)
    const firstEntryDisplayedIndex = (currentPage-1)*entriesDisplayed
    const lastPageNumber = Math.floor(data.length/entriesDisplayed) + 1
    const subData = data.slice(firstEntryDisplayedIndex, lastEntryDisplayedIndex)
    const pagesNumberArray = [...Array(lastPageNumber).keys()].splice(1)

    const isPreviousDisabled = firstEntryDisplayedIndex === 0
    const isNextDisabled = lastEntryDisplayedIndex === lastEntryIndex + 1


    return (
        <>
            <div className="main-table-wrapper">
                <div className="options-wrapper">
                    <div className="page-length-wrapper">
                        <select id="page-length" value={entriesDisplayed} onChange={onSelectEntriesDisplayed}>
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <label htmlFor="page-length"> entries per page</label>
                    </div>
                    <div className="search-wrapper">
                        <label>Search : </label>
                        <input type="text" />
                    </div>
                </div>
                <table>
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
                    {subData.map(currentData => (
                        <DataRow columns={columns} subData={currentData}
                                 key={`${currentData[firstColLabel]} ${currentData[columns[1].data]}`}/>
                    ))}
                    </tbody>
                </table>
                <div>
                    <div>entries {firstEntryDisplayedIndex + 1}-{lastEntryDisplayedIndex} of {lastEntryIndex + 1}</div>
                    <div>
                        <button disabled={isPreviousDisabled} onClick={onClickingPrevious}>Previous</button>
                        {pagesNumberArray.map(pageNumber => (
                            <button
                                key={pageNumber}
                                onClick={() => setCurrentPage(pageNumber)}
                            >{pageNumber}</button>
                        ))}
                        <button disabled={isNextDisabled} onClick={onClickingNext}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomTable