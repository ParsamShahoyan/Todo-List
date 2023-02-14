
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrementN, incrementN, resetN, selectN } from './store/slices/n/nSlice'
import { resetText, selectText, toggleText } from './store/slices/text/textSlice'
import { addTodo, checkItem, delItem, selectTodos } from './store/slices/todos/todosSlice'

const App = () => {
  
  const dispatch = useDispatch()
  const n = useSelector(selectN)
  const text = useSelector(selectText)
  const todos = useSelector(selectTodos)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(text))
    dispatch(resetText())
  }

  return (<div>
    <span>{n}</span>
    <br />
    <button onClick={()=> dispatch(incrementN(1))}> + 1</button>
    <button onClick={()=> dispatch(incrementN(2))}> + 2 </button>
    <button onClick={()=> dispatch(resetN())}>ResetN</button>
    <button onClick={()=> dispatch(decrementN(1))}> - 1</button>
    <button onClick={()=> dispatch(decrementN(2))}> - 2 </button>
    <hr />
    <form action="" onSubmit={handleSubmit}>
      <input value={text} onChange={e => dispatch(toggleText(e.target.value))} type="text" />
      <button>Add</button>
    </form>
    <div>
      {
        todos.map(el => (
          <h1 key={el.id}>
            <span style={{textDecoration: el.compeited ? 'line-through' : 'none'}}>{el.title}</span>
            <span onClick={()=> dispatch(delItem(el.id))} style={{color: 'red', cursor: 'pointer'}}> X </span>
            <input onChange={()=> dispatch(checkItem(el.id))} checked={el.completed} type="checkbox" />
          </h1>
        ))
      }
    </div>
  </div>
  )
}

export default App
