import React, {useState} from 'react' ;

//React components has a built-in state object.
//The state object is where you store property values that belongs to the component.
//When the state object changes, the component re-renders.

import './SearchBar.css';


function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        
        const newFilter = data.filter((value) => {
            // with the filter function you can define how the app is filtering through the data. IT will loop through whole data set and for each element. 
            //If the title of the book includes the word than keep it else get rid of it!
            //convert string to lowercase 
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "" ){
            setFilteredData = ([]);
        } else {
            setFilteredData(newFilter);

        }
    };



    return (
        <div className="search">
            <div className="searchInputs">

                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div className="searchIcon"></div>
            </div>
            {filteredData.length != 0 && (
            <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                    <a className="dataItem"><p>{value.title}</p> </a>
                    );
                })}
            </div>
            )}

        </div>
    )
}

export default SearchBar