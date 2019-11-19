import * as types from '../../store/action-types'

// 定义接口 分别约束add和subtract的type类型
export interface Add2{
    type: typeof types.ADD2
}

export interface Subtract2{
    type: typeof types.SUBTRACT2
}

// 再导出一个type
// type是用来给类型起别名的
// 这个actions里是一个对象，会有很多函数，每个函数都会返回一个action
// 而 ./store/reducers/index.tsx中的action会是下面某一个函数的返回值
export type Action = Add2 | Subtract2


export default {
    add():Add2{
        // 返回action对象
        return {type: types.ADD2}
    },
    subtract():Subtract2{
        return {type: types.SUBTRACT2}
    },
    addAsync():any{
        return (dispatch:any,getState:any) => {
            setTimeout(() => {
                dispatch({type: types.ADD2})
            },2000)
        }
    }
}