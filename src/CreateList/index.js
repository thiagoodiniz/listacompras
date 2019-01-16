import React, {Component} from 'react'
import Form from './Form'
import './CreateList.css'
import ListItem from './ListItem'
import { Creators as ListActions } from '../store/actions/list'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NewItem from './NewItem'

class CreateList extends Component{

    render(){
        return (
            <div className="page-container">
                <Form 
                    addProduct={this.props.addProduct} 
                    updateProduct={this.props.updateProduct}
                    url={this.props.match.params.action}
                />
                
                <div className="list-items-container">
                    { this.props.match.params.action === 'update' &&
                        <NewItem list={this.props.list.list} />
                    }  
                    {this.props.list.items.map((item) => 
                        <ListItem 
                            item={item} 
                            list={this.props.list.list}
                            key={item.id} 
                            deleteProduct={this.props.deleteProduct}
                            toggleProduct={this.props.toggleProduct}
                        />  )}      
      
                </div>
   
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.list
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateList)