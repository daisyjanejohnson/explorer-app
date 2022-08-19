import React from 'react'
import './SearchBar.css'
import LocationData from "./Data.json"


function SearchBar({placeholder, data}) {
    return (
        <div className="search">
            <div className="searchInputs">

                <input type="text" placeholder={placeholder} />
                <div className="searchIcon"></div>
            </div>

            <div className="dataResult">
                {data.map((value, key) => {
                    return <a className="dataItem"><p>{value.display_name}</p> </a>;
                })}
            </div>


        </div>
    )
}

export default SearchBar