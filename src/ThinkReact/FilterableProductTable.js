import React from "react"
import SearchBar from "./SearchBar";

class FilterableProductTable extends React.Component {
    render(){
        return(
            <div>
                <SearchBar></SearchBar>
            </div>
        );
    }
}
export default FilterableProductTable;