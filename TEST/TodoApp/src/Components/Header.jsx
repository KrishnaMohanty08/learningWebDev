import React, { useState } from 'react'
import Form from './Form'

const Header = (form) => {

    const [todo, setTodo] = useState("")
    const [Todos, setTodos] = useState([])

    const Download = () => {
        console.log('Download');
    }

    const handleAdd = () => {
        console.log('Add');
        setTodos = ([...Todos, { isCompleted: false }])

    }
    const handleDelete = () => {

    }
    const handleChange = () => {
        console.log("change");
    }

    return (
        <>
            <div className="w-full bg-orange-100">
                <h1 className="text-5xl font-sans rounded text-black font-semibold text-left pl-4 pt-2">
                    Your Todos
                </h1>
                <br/>
                {/* Download */}
                <div className="flex space-x-4 justify-end p-4">
                    <button className='' onClick={Download}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 hover-stroke">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </button>
                </div>
                <hr className="border-t-2 border-gray-300 my-4 w-full" />
                {/* Todo List */}
                <div className="flex flex-row gap-4">
                    {/* Add Todo */}
                    <button onClick={handleAdd} className='w-[150px] h-[150px] bg-blue-300 rounded-lg justify-center px-9'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    {/* Todos */}
                    {todos.map(todo => (
                        <div key={todo.id} className="Todos w-[150px] h-[150px] bg-red-300 rounded-lg items-center justify-center">

                                <h3 className="font-bold">{todo.TodoName}</h3>
                                <p className='text-sm'>{todo.SubmissionDate} </p>
                                <p classname='text-red-500 text-sm'>{todo.Priority}</p>
                                {/* Functions */}
                                <div className="flex flex-col items-start space-y-2">
                                    <button className="flex items-center justify-center gap-2 bg-white text-red-500 font-semibold px-4 py-2 rounded-lg shadow-md " onClick={() => handleEdit(todo)}>
                                        Update
                                    </button>
                                    <button className=" items-center justify-center bg-black text-red-500 font-semibold px-4 py-2 rounded-lg w-1/3 shadow-md " onClick={() => handleDelete(todo.id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                    ))}
                    
                </div>
                {isFormVisible && <Form onSubmit={handleFormSubmit} todo={currentTodo} />}
            </div>
        </>
    )
}

export default Header
