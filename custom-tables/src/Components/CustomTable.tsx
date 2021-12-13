import React, {ChangeEvent, useMemo, useState} from "react";
import HeaderElement from "./HeaderElement";
import DataRow from "./DataRow";
import {anyKeyOfStringOrNumber, columnsLabelsItem} from "../data/data";
import {isValid as isValidDate} from 'date-fns'

/**
 * The table to display the data.
 * Given the two props described below, makes a table
 * with sort, filter and pagination functionalities.
 * @component
 * @param {Object[]} props The props of the component : columns and data
 * @param {Object[]} props.columns The columns prop. Must be an array with each element having a label and title value
 * @param {Object[]} props.data The data to be displayed. The key of each object must correspond to the value of label
 * in the columns prop
 * @returns {JSX.Element} The table of data, or a message if no data is given
 * @constructor
 */
function CustomTable({data, columns} : {data : anyKeyOfStringOrNumber[], columns : columnsLabelsItem[]}) {

    const [entriesDisplayed, setEntriesDisplayed] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    /**
     * Modifies the state corresponding to the number of entries displayed each pages
     * Should be called on the onChange of the select dropdown
     * @param e The synthetic event
     */
    function onSelectEntriesDisplayed(e : ChangeEvent<HTMLSelectElement>) {
        setEntriesDisplayed(parseInt(e.target.value))
        setCurrentPage(1)
    }

    const [searchKeyword, setSearchKeyword] = useState('')

    /**
     * Modifies the search of the keyword used to filter the data
     * Should be called on the onChange of the text input
     * @param e The synthetic event
     */
    function onChangeSearch(e : ChangeEvent<HTMLInputElement>) {
        setSearchKeyword(e.target.value)
        setCurrentPage(1)
    }

    /**
     * Take an array of data and returns a filtered array containing the keyword passed as an argument
     * Since it's a costly operation, it should be using the useMemo hook of React
     * @param {Object[]} data The data to be filtered
     * @param {string} keyword The keyword used to filter the data
     * @param {Object[]} columnsArray The array of columns corresponding to each key of every data object
     * @param {string} columnsArray[].data The key of the data object
     * @returns {Object[]} The filtered array
     */
    function filterData(data : anyKeyOfStringOrNumber[],keyword : string,columnsArray : columnsLabelsItem[]) {
        return data.filter(row => {
            for (let currentColumn of columnsArray) {
                if (row[currentColumn.label].toString().toLowerCase().includes(keyword.toLowerCase())) return true
            }
            return false
        })
    }

    /**
     * Memoized the result of the filtering of the data array with each given keyword
     * @type {Object[]}
     */
    const memoizedFilter = useMemo(() => filterData(data,searchKeyword,columns)
    ,[searchKeyword,data,columns])

    const firstColLabel = columns[0]?.label
    const [currentSorting, setCurrentSorting] = useState(`${firstColLabel} asc`)
    const [sortingData, sortDirection] = currentSorting.split(' ')

    /**
     * Determines the type of data of a given variable
     * Only detects date, text or number types
     * Is used to use the adequate sort
     * @param subData The variable to analyse
     * @returns {string} The type of the variable
     */
    function typeOfData(subData : any) {
        if (isValidDate(new Date(subData))) return 'date'

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

    /**
     * Sort the array of the data given the sorting column and a sort direction
     * Since it's a costly operation, the results should be memoized
     * @param {Object[]} dataset The data to be sorted. Every element with a given key must be of the same type
     * @param {string} sortingColumn The column used to sort. Must exist as a key of each dataset element
     * @param {'asc'|'desc'} direction The direction of the sort
     * @returns {Object[]} The sorted array of data
     */
    function sortData(dataset : any, sortingColumn : string, direction : string) {
        if (dataset.length === 0) return []

        const sortType = typeOfData(dataset[0][sortingColumn])

        dataset.sort((a : any,b : any) => {
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

    /**
     * Memoize the result of the sorting of the data
     * @type {Object[]|*[]} The sorted array or an empty array without available data
     */
    const memoizedSort = useMemo(() => memoizedFilter ? sortData(memoizedFilter, sortingData, sortDirection) : [],
        [memoizedFilter, sortingData,sortDirection])

    function onClickingNext() {
        setCurrentPage(currentPage + 1)
    }

    function onClickingPrevious() {
        setCurrentPage(currentPage - 1)
    }

    const lastEntryIndex = memoizedSort?.length - 1
    const lastEntryDisplayedIndex = Math.min((currentPage)*entriesDisplayed, lastEntryIndex + 1)
    const firstEntryDisplayedIndex = (currentPage-1)*entriesDisplayed
    const lastPageNumber = Math.floor(memoizedSort?.length/entriesDisplayed) + 1
    const subData = memoizedSort.slice(firstEntryDisplayedIndex, lastEntryDisplayedIndex)

    let firstNumberArray = currentPage -5 <= 1 ? 1 : currentPage - 5
    const lastNumberArray = firstNumberArray + 10 <= lastPageNumber ? firstNumberArray + 10 : lastPageNumber
    firstNumberArray = lastNumberArray - 10 <= 1 ? 1 : lastNumberArray - 10
    const pagesNumberArray = memoizedSort ? [...Array(lastNumberArray).keys()].splice(firstNumberArray) : []

    const isPreviousDisabled = firstEntryDisplayedIndex === 0
    const isNextDisabled = lastEntryDisplayedIndex === lastEntryIndex + 1

    if (!data) return (
        <>
            <div className="main-table-wrapper">
                <div className="empty-table">
                    No data available
                </div>
            </div>
        </>
    )

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
                        <input type="text" value={searchKeyword} onChange={onChangeSearch}/>
                    </div>
                </div>
                <table className="main-table">
                    <thead className="table-header">
                    <tr>
                        {columns.map(currentCol => (
                            <HeaderElement
                                key={currentCol.label}
                                title={currentCol.title} data={currentCol.label}
                                currentSorting={currentSorting} setCurrentSorting={setCurrentSorting}
                            />
                        ))}
                    </tr>
                    </thead>

                    <tbody className="table-body">
                    {subData.length === 0 ?
                        <tr><td colSpan={columns.length} className="empty-table">No data available</td></tr>
                        :
                        subData.map((currentData : anyKeyOfStringOrNumber) => (
                        <DataRow columns={columns} subData={currentData}
                                 key={`${currentData[firstColLabel]} ${currentData[columns[1].label]}`}/>
                    ))}
                    </tbody>
                </table>
                <div className="options-wrapper">
                    <div>entries {firstEntryDisplayedIndex + 1}-{lastEntryDisplayedIndex} of {lastEntryIndex + 1}</div>
                    <div className="page-button-wrapper">
                        <button disabled={isPreviousDisabled} onClick={onClickingPrevious}>Previous</button>
                        {pagesNumberArray.map(pageNumber => (
                            <button className={`page-number-button ${pageNumber === currentPage && 'active-button'}`}
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