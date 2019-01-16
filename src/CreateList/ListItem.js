import React from 'react'
import CustomCard from '../Commons/CustomCard'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import ListItemFooter from './ListItemFooter'

const ListItem = ({item, deleteProduct, toggleProduct, list}) => {
    return(
        <CustomCard
            link="#"
            containerClass="list-item"
            cardFooter={<ListItemFooter item={item} list={list} deleteProduct={deleteProduct}/>}
            image={item.img}
            action={() => toggleProduct(item.id)}
        >

        <div>
            <div className="list-item-header">
                <Typography variant="subtitle1" component="h2">{item.product}</Typography>
                <Checkbox checked={item.checked} />
            </div>
            <Typography component="p">{item.quantity} {item.unit}</Typography>
            <Typography component="p">R$ {item.price}</Typography>
        </div>

        </CustomCard>
    )
}

export default ListItem;