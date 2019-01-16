import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardAtions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import './CustomCard.css';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';

import CardMedia from '@material-ui/core/CardMedia';

const CustomCard = (props) => {
    return(
        <div className={props.containerClass}>
        <Link to={props.link}>
            <Card className='card'>
                <CardActionArea onClick={props.action} className='card-action-area'>
                   {props.image && <CardMedia 
                        component="img"
                        className="card-img"
                        heigth="100"
                        image={props.image}
                        title="image"
                    />}
                    <CardContent className='card-content'>
                        {props.children}
                    </CardContent>
                </CardActionArea>
                    {props.cardFooter && 
                        <div>
                            <Divider/>
                            <CardAtions className="card-footer">
                                {props.cardFooter}
                            </CardAtions>
                        </div>
                    }
            </Card>        
        </Link>

    </div>
    )
}

CustomCard.proptypes = {
    containerClass: Proptypes.string.isRequired,
    children: Proptypes.element.isRequired,
    cardFooter: Proptypes.element,
    image: Proptypes.image,
}

export default CustomCard;