import React from "react";
import "../Styles/HeaderElement.css"
import {FaSort, FaSortDown, FaSortUp} from "react-icons/fa";

/**
 * Component used as a header element for the table
 * Clicking on each element triggers a sorting of the table
 * Sorting can be "asc" or "desc"
 * @param {string} title The text content of the header
 * @param {string} data The key corresponding to the data being displayed/sorted by this header element
 * @param {string} currentSorting The state of the table corresponding to the type of sorting (ex : 'firstName asc')
 * @param {function} setCurrentSorting The function used to change the currentSorting state
 * @returns {JSX.Element} The header with the adequate fontAwesome Icon illustrating the type of sorting
 * @constructor
 */
function HeaderElement({title, data, currentSorting,setCurrentSorting}) {

    if (currentSorting === `${data} asc`) {
        return (
            <th className="header-element"
                onClick={() => setCurrentSorting(`${data} desc`)}>
                {title} <FaSortUp />
            </th>
        )
    }

    if (currentSorting === `${data} desc`) {
        return (
            <th className="header-element"
                onClick={() => setCurrentSorting(`${data} asc`)}>
                {title} <FaSortDown />
            </th>
        )
    }

    return (
        <th className="header-element"
            onClick={() => setCurrentSorting(`${data} asc`)}>
            {title} <FaSort className="fa-sort"/>
        </th>
    )
}

export default HeaderElement