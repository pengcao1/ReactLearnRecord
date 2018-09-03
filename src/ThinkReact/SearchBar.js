import React from "react"

class SearchBar extends React.Component{

    handleFilterChange (e) {
        this.props.handleFilterChange(e.target.value);
    }
    
    render() {
      return (
          <form>
              <input
                type="text"
                placeholder="Search..."
                value={this.props.filterProps}
                onChange={this.handleFilterChange}
              />
              <p>
                  <input
                    type="checkbox"
                  />
                  {" "}
                  Only show products in stock
              </p>
          </form>
      )
    };
}
export default SearchBar;