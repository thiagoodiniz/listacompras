import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { InputAdornment } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FormActions } from '../store/actions/form'

const units = [
    'Kilos', 'Litros', 'Unidade'
]

class Form extends Component {

    state = {
        list: '',
        product: '',
        quantity: '',
        unit: '',
        price: '',
        showErrors: false
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    componentDidUpdate(prevProps) {
        if(this.props.form.action === 'update' && prevProps.form.productToUpdate !== this.props.form.productToUpdate){
            const {product, quantity, unit, price} = this.props.form.productToUpdate;
            this.setState({
                list: this.props.form.listToUpdate,
                product,
                quantity,
                unit,
                price,
                showErrors: false
            })
        }
        
        if(this.props.form.action === 'new' && prevProps.form.action !== this.props.form.action){
            this.setState({list: this.props.form.listToUpdate})
        }
    }

    handleSubmit = () => {
        const {list, product, quantity, unit, price} = this.state
        if(!list || !product || !quantity || !unit){
            this.setState({showErrors: true})
        }else{
            this.props.form.action === 'update'
            ? this.updateItem(product, quantity, unit, price, list)
            : this.addItem(product, quantity, unit, price, list)

            this.clearForm()
        }
    }

    addItem(product, quantity, unit, price, list){
        this.props.addProduct({product, quantity, unit, price}, list)
        this.props.finishAdd()
    }

    updateItem(product, quantity, unit, price, list){
        const {id, checked} = this.props.form.productToUpdate
        this.props.updateProduct({product, quantity, unit, price, id, checked}, list)
        this.props.finishUpdate()
    }
    
    handleCancel = () => {
        this.props.form.action === 'update' ? this.props.cancelUpdate() : this.props.cancelAdd() 
        
        this.clearForm()
    }

    clearForm(){
        this.setState({
            product: '',
            quantity: '',
            unit: '',
            price: '',
            showErrors: false
        })
    }

    render(){
        if(!this.props.showForm){
            return <div></div>
        }else{
            return (
                <form className="form-container">
                    <div className="form-row">
                        <TextField
                            label="Lista"
                            name="list"
                            value={this.state.list}
                            onChange={this.handleChange}
                            required
                            error={!this.state.list && this.state.showErrors}
                        />
                        <Button color="secondary" onClick={this.handleSubmit} variant="outlined">Salvar</Button> 
                        {
                            this.props.form.action &&
                                <Button color="primary" onClick={this.handleCancel} variant="outlined" >Cancelar</Button> 
                        }
                        
                    </div>
                    <div className="form-row">
                        <TextField
                            label="Produto"
                            name="product"
                            value={this.state.product}
                            onChange={this.handleChange}
                            required
                            error={!this.state.product && this.state.showErrors}
                        />
                        <TextField
                            label="Quantidade"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                            required
                            error={!this.state.quantity && this.state.showErrors}
                        />
                        <TextField
                            select
                            label="Unidade"
                            name="unit"
                            value={this.state.unit}
                            onChange={this.handleChange}
                            required
                            error={!this.state.unit && this.state.showErrors}
                        >
                            {units.map(option => 
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            )}
                        </TextField> 
                        <TextField
                            label="Preço"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                            type="number"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>
                            }}
                        />
                    </div>           
                </form>
            )
          }
        }
    
}

const mapStateToProps = (state, ownProps) => ({
    form: state.form,
    showForm: state.form.action || ownProps.url === 'add'
})

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form);