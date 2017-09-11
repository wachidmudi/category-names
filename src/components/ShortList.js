import React from 'react';
import List from './List';

export default ({data, favourites}) => {
    const namesList = favourites.map(list => {
        const { id, name, rating } = data[list]
        return (
            <List key={id} name={name} rating={rating} />
        )
    })
    return (
        <div className="fav">
            <p>Click on a category name to shortlist</p>
            <ul>
                {namesList}
            </ul>
        </div>
    )
}