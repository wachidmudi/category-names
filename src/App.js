import React, { Component } from 'react';
import './App.css';
import NamesList from './components/NamesList';
import About from './components/About';
import Search from './components/Search';
import ShortList from './components/ShortList';

class App extends Component {

  //In ES6^, Constructor can be defined
  constructor(props){
    super(props)
    this.state = {
      // filterText must be null to make 'nameList' (NameList.js) work properly
      filterText: '',
      favourites: []
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }
  addFavourite(id) {
    const favsList = this.state.favourites.concat([id])
    this.setState({
      favourites: favsList
    })
  }

  render() {
    return (
      <div>
        <Search 
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
          <main>
            <ShortList 
              data={this.props.data}
              favourites={this.state.favourites}
            />
            <NamesList 
              data={this.props.data} 
              filterText={this.state.filterText}
              addFavourite={this.addFavourite.bind(this)}
            />
            <About />
          </main>
      </div>
    )
  }
}

export default App;
