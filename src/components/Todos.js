import React from 'react'

const Todos = ({todos, handleEdit, handleDelete}) => {
    return (
        <div>
            <ul className='alltodos'>
                {
                    todos.map((t) => {
                        return <li className='singletodo'>
                            <span className='todotext' key={t.id}>{t.todo}</span>
                            <button onClick={() => handleEdit(t.id)}>Edit</button>
                            <button onClick={() => handleDelete(t.id)}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todos