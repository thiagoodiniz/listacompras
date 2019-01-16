import React from 'react'
import NewList from '../List/NewList'
import List from '../List/List'
import './Home.css'
import { connect } from 'react-redux'
import { getListTotal, getClosedItems, getOpennedItems } from '../store/reducers/list'
import { bindActionCreators } from 'redux'
import { Creators as ListActions } from '../store/actions/list'

const Home = (props) => {
    return(
        <div className='page-container'>
            
            <NewList action={props.newList} />
            {   
                props.list.items.length > 0 && 
                <List 
                    list={props.list.list} 
                    total={props.total}
                    closedItems={props.closedItems}
                    opennedItems={props.opennedItems}
                    date={props.date}
                />
            }           

        </div>
        )
}

const MapStateToProps = state => ({
    list: state.list,
    total: getListTotal(state),
    closedItems: getClosedItems(state),
    opennedItems: getOpennedItems(state),
    date: state.list.date
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(MapStateToProps, mapDispatchToProps)(Home) 