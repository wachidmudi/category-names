import React from 'react';

const classNames = require( 'classnames' );

export default ({name, rating, action}) => {
    // Dynamically add classes using 'classnames' node module
    const classes = classNames({
        'btn' : true,
        'btn-default' : (rating === 'normal'),
        'btn-primary' : (rating === 'high')
        })
    return (
        // The 'key' value defined in parent component not in here
        <li className={classes} onClick={action}>{name}</li>
    )
}