import React from 'react';
import List from './List';

export default ({data, filterText, addFavourite}) => {
    
    //const { data, filterText } = this.props;
    const namesList = data
      .filter(name => {
        // Get names that match with filter value
        return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
      })
      .map(name => {
  
        return (
          <List key={name.id} name={name.name} rating={name.rating} action={() => addFavourite(name.id)} />
        )
    })

    return (
      <div>
        <ul>
          {namesList}
        </ul>
      </div>
    );
}