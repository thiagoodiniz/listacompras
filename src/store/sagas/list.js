import { call, put } from 'redux-saga/effects'
import { services } from '../../services'
import { Creators as ListActions } from '../actions/list'

const genericImg = 'https://media.istockphoto.com/vectors/grocery-cart-vector-illustration-shopping-trolley-icon-vector-id1004025854'

export function* getImageRequest(action){
    try{
        const img = yield call(services.getImage, action.product.product)
        yield put(ListActions.getImageSuccess(action.product, img))
    } catch(err){
        console.log(err)
        yield put(ListActions.getImageFailure(action.product, genericImg))
    }
} 