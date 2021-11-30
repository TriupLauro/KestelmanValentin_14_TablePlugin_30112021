import React from "react";
import "../Styles/HeaderElement.css"

//Sorting can be false, "asc" or "desc"
function HeaderElement({title, data, currentSorting,setCurrentSorting}) {

    if (currentSorting === `${data} asc`) {
        return (
            <th className="header-element"
                onClick={() => setCurrentSorting(`${data} desc`)}>
                {title} <i className="fas fa-sort-up"></i>
            </th>
        )
    }

    if (currentSorting === `${data} desc`) {
        return (
            <th className="header-element"
                onClick={() => setCurrentSorting(`${data} asc`)}>
                {title} <i className="fas fa-sort-down"></i>
            </th>
        )
    }

    return (
        <th className="header-element"
            onClick={() => setCurrentSorting(`${data} asc`)}>
            {title} <i className="fas fa-sort"></i>
        </th>
    )
}

export default HeaderElement