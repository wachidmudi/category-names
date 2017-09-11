import React, { Component } from 'react';

class Search extends Component {

    filterUpdate(){
        //Accessing the DOM value of input filter
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }

    render() {
        return (
            <header>
              <form>
                <input
                  type="text"
                  //Pass a callback function instead of string
                  ref={ (value) => {this.myValue = value }}
                  placeholder="Type here to filter.."
                  onChange={this.filterUpdate.bind(this)}
                />
              </form>
            </header>
        )
    }
}

export default Search;