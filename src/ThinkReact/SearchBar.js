import React from "react"

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterChange (e) {
        console.log("SearchBar handleFilterChange ", e.target.value)
        this.props.onFilterTextChange(e.target.value);
    }
    handleInStockChange = (e) => {
        console.log("SearchBar handleInStockChange ", e.target.value)
        this.props.onInStockChange(e.target.value);
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
                    value={this.props.isStockOnly}
                    onChange={this.handleInStockChange}
                    onClick={this.handleInStockChange}
                  />
                  {" "}
                  Only show products in stock
              </p>
          </form>
      )
    };
}
export default SearchBar;