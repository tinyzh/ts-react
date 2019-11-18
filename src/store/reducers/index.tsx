import {Store} from '../../types/index'
import {Action} from '../actions/counter'
import * as types from '../action-types'

let initState:Store = {number:0}

export default function(state: Store=initState,action:Action){
    switch(action.type){
        case types.ADD:
            return {number: state.number + 1}
            break
        case types.SUBTRACT:
            return {number: state.number - 1}
            break
        default:
            return state
            break
    }
}