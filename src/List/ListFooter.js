import React from 'react';

const ListFooter = (props) => {
    return(
        <div className='list-footer'>
            <p>{props.date}</p>
            <p>{props.total}</p>
        </div>
    )
}

export default ListFooter;