import React from 'react';
import CustomCard from '../Commons/CustomCard';
import {faShoppingBasket, faCheck} from '@fortawesome/free-solid-svg-icons';
import ListItem from '../List/ListItem';
import ListFooter from '../List/ListFooter';
import './List.css';

const List = (props) => {
    return(
        <CustomCard 
            containerClass='list-container'
            cardFooter={<ListFooter date={props.date} total={props.total} />}
            link="list/update"
            >
            <div>
                <p className="title">{props.list}</p>
                <div className="list-card-body">
                    <ListItem icon={faShoppingBasket} text={`${props.opennedItems} Item(s) Restante`} />
                    <ListItem icon={faCheck} text={`${props.closedItems} Item(s) Comprados`} />
                 </div>
            </div>
        </CustomCard>
    )
}

export default List;