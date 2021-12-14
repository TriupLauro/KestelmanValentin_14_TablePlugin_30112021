import React from "react";
import {FaSort, FaSortDown, FaSortUp} from "react-icons/fa";

interface HeaderElementProps {
    title : string
    label : string
    currentSorting : string
    setCurrentSorting : Function
}

/**
 * Component used as a header element for the table
 * Clicking on each element triggers a sorting of the table
 * Sorting can be "asc" or "desc"
 * @param {Object} props The props of the component
 * @param {string} props.title The text content of the header
 * @param {string} props.label The key corresponding to the data label being displayed/sorted by this header element
 * @param {string} props.currentSorting The state of the table corresponding to the type of sorting (ex : 'firstName asc')
 * @param {function} props.setCurrentSorting The function used to change the currentSorting state
 * @returns {JSX.Element} The header with the adequate fontAwesome Icon illustrating the type of sorting
 * @constructor
 */
function HeaderElement({title, label, currentSorting,setCurrentSorting} : HeaderElementProps) {

    if (currentSorting === `${label} asc`) {
        return (
            <th className="header-element"
                onClick={() => setCurrentSorting(`${label} desc`)}>
                {title} <FaSortUp />
            </th>
        )
    }

    if (currentSorting === `${label} desc`) {
        return (
            <th className="header-element"
                onClick={() => setCurrentSorting(`${label} asc`)}>
                {title} <FaSortDown />
            </th>
        )
    }

    return (
        <th className="header-element"
            onClick={() => setCurrentSorting(`${label} asc`)}>
            {title} <FaSort className="fa-sort"/>
        </th>
    )
}

export default HeaderElement