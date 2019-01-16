import { Types } from '../actions/list'
import { createSelector } from 'reselect'
import uuidv1 from 'uuid/v1'

const INITIAL_STATE = {
    list: null,
    items: []
}

export default function list(state = INITIAL_STATE, action){
    switch (action.type){
        case Types.NEW_LIST:
            return {
                ...state,
                date: getDate()
            }

        case Types.ADD_PRODUCT:
            return { 
                    ...state,
                    list: action.list, 
                    }          
        
        case Types.DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.productId)
            }
            
        case Types.TOGGLE_PRODUCT:
            return {
                ...state,
                items: toggleItem(state.items, action.productId)
            }
        
            case Types.UPDATE_PRODUCT:
            return {
                ...state,
                list: action.list,
                items: updateProduct(state.items, action.product)
            }  
            
            case Types.GET_IMAGE_SUCCESS:
            case Types.GET_IMAGE_FAILURE:
                return {
                    ...state,
                    items: [...state.items, 
                        {...action.product, 
                            total: getTotalPrice(action.product), 
                            id: uuidv1(), 
                            checked: false,
                            img: action.img
                        }
                    ]
                }

        default:
            return state    
    }
}

// HELPERS

// valor final do produto
function getTotalPrice(product){
    return product.price * product.quantity
}

function updateProduct(items, product){
    const index = items.findIndex(item => item.id === product.id)
    return [
        ...items.slice(0, index), // Retorna todos os itens antes do item selecionado
        {...product, total: getTotalPrice(product)}, // Altera o item selecionado e retorna
        ...items.slice(index + 1) // Retorna o restante dos itens
    ]
}

function toggleItem(items, productId){
    const index = items.findIndex(item => item.id === productId)
    return [
        ...items.slice(0, index), // Retorna todos os itens antes do item selecionado
        {...items[index], checked: !items[index].checked}, // Altera o item selecionado e retorna
        ...items.slice(index + 1) // Retorna o restante dos itens
    ]
}

function getDate(){
    const date = new Date()
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'}
    return date.toLocaleDateString('pt-BR', options)
}

// SELECTORS

// Retorna o total de todos os itens somados
export const getListTotal = createSelector(
    state => state.list.items,
    items => items.reduce((total, item) => total +  item.total, 0)
)

// Retorna os itens sem check (restantes)
export const getOpennedItems = createSelector(
    state => state.list.items,
    items => items.filter(item => !item.checked).length
)

// Retorna os itens com check (comprados)
export const getClosedItems = createSelector(
    state => state.list.items,
    items => items.filter(item => item.checked).length
)