import React, {useState} from 'react'
import "./App.css"
import Form from "./components/Form"
import Todos from "./components/Todos"

const App = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editId){
      const findId = todos.find((i)=>i.id===editId);
      const updateTodos = todos.map((t)=>
        t.id===findId.id?(t={id: t.id, todo}):({id: t.id, todo: t.todo})
      )
      setTodos(updateTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if(todo!==""){
      setTodos([{id: `${todo}-${Date.now()}`, todo}, ...todos])
      setTodo("")
    }
  }
  const handleDelete = (id) => {
    const delTodo = todos.filter((d)=> d.id!==id)
    setTodos([...delTodo])
  }
  const handleEdit = (id) => {
    const editId = todos.find((i)=>i.id===id);
    setTodo(editId.todo);
    setEditId(id);
  }
  return (
    <div className='App'>
      <div className="container">
        <h1>Todo List App</h1>
        <Form todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} editId={editId}/>
        <Todos todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </div>
    </div>
  )
}

export default App