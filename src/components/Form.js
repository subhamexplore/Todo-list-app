import React from 'react'

const Form = ({todo, setTodo, handleSubmit,editId}) => {
    return (
        <div>
            <form action="" className='todoform'>
                <input type="text" placeholder='Enter your task' value={todo} onChange={(event) => setTodo(event.target.value)} />
                <button onClick={handleSubmit}>{editId ? "Edit" : "Go"}</button>
            </form>
        </div>
    )
}

export default Form