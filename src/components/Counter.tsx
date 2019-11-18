import * as React from 'react'
import {connect} from 'react-redux'
import actions from '../store/actions/counter'
import {Store} from '../types'

interface IProps{
    number: number,
    add: any,
    subtract: any,
    addAsync:any
}

interface IState{
    number: number
}

class CounterComponent extends React.Component<IProps> {
    

    render(){
        let {number,add,subtract,addAsync} = this.props
        return (
            <div>
                <p>{number}</p>
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
                <button onClick={addAsync}>异步加1</button>

            </div>
        )
    }
}

let mapStateToProps = (state: Store) => {
    return state
}

export default connect(mapStateToProps,actions)(CounterComponent)