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
          </form>
      )
    };
}
export default SearchBar;