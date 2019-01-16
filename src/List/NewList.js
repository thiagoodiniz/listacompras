import React from 'react';
import CustomCard from '../Commons/CustomCard';

const NewList = (props) => {
    return(
        <CustomCard action={props.action} containerClass='new-list-container' link='/list/add'>  
            <div>
                <p className='title'>Adicionar novas listas!</p>
            </div>
        </CustomCard>
    );
}

export default NewList;