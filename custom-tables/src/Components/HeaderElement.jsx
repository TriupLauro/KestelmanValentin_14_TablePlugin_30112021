import React from "react";
import "../Styles/HeaderElement.css"
import {FaSort, FaSortDown, FaSortUp} from "react-icons/fa";

//Sorting can be false, "asc" or "desc"
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