import { createReducer, on } from "@ngrx/store"
import { decrement, increment, reset } from "./counter.action"


export interface  CounterState{
    count: number
}
export const initialCountState: CounterState={
    count:0
}
export const countReducer = createReducer(
    initialCountState, on(increment,state=>({
        ...state, count: state.count +1
    })),
    on(decrement,state=>({
        ...state, count: state.count -1
    })),
    on(reset,state=>({
        ...state, count: 0
    }))
)