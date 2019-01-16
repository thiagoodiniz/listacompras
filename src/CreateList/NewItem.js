import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FormActions } from '../store/actions/form'
import CustomCard from '../Commons/CustomCard'

const NewItem = (props) => {
    return(
        <CustomCard link='#' containerClass='list-item' action={() => props.startAdd(props.list)}>
            <div className='new-item'>
                <p className='title'>Novo Produto</p>
                <FontAwesomeIcon icon={faPlusCircle} color='#757575' size='8x'/>
            </div>
            
        </CustomCard>
    )

}

const mapDispatchhToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(null,mapDispatchhToProps)(NewItem)
