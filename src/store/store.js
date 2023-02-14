import {combineReducers, createStore} from 'redux'
import { initialN, nReducer } from './slices/n/nSlice'
import { initialText, textReducer } from './slices/text/textSlice'
import { initialTodos, todosReducer } from './slices/todos/todosSlice'

const store = createStore(combineReducers({
    n: nReducer,
    text: textReducer,
    todos: todosReducer,
}), {
    n: initialN,
    text: initialText,
    todos: initialTodos, 
})  


export default store