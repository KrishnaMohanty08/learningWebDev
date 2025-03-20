import React, { useState , useEffect } from 'react'
import Form from './Form'

const Header = () => {

    const [Todo, setTodo] = useState("")//current todo
    const [todos, setTodos] = useState(()=>{
        let todoString =localStorage.getItem("todos")
        return todoString? JSON.parse(todoString):[];

    })//list of todos
    const [isFormOpen,setFormOpen] =useState(false)

    useEffect(()=>{
        let todoString =localStorage.getItem("todos")
        if(todoString){
            let todos =JSON.parse(todoString);
        }setTodos(todos);
        
    },[])
    
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));}
    )
    const Download = () => {
        console.log('Download');
        const todoString=JSON.stringify(todos,null,2);
        const todoText=todos
        .map(todo=>`TodoName:${todo.TodoName}\tSubmission Date:${todo.SubmissionDate}\tPriority:${todo.Priority}
            \nDiscription :${todo.disc}\n`)
        .join('\n');
        const blob=new Blob([todoText],{type:"plain/text"});
        const url=URL.createObjectURL(blob);
        const link=document.createElement("a");
        link.href=url;
        link.download="todosList.txt";
        link.click();
        URL.revokeObjectURL(url);
    }

    const handleAdd = () => {
        console.log('Add');
        setTodo(null)
        setFormOpen(true);
        
    }
    const handleDelete = (todoId) => {
        setTodos(todos.filter((todo)=>todo.id !==todoId));
        
    }
    const handleEdit = (todo) => {
        console.log("change");
        setTodo(todo);
        setFormOpen(true);
        
    }
    const handleFormSumbit=data=>{
        if (Todo) {
            console.log("handlesumbit");
            setTodos(
                todos.map((todo) => (todo.id === Todo.id ? { ...todo, ...data } : todo))
            );
        } else {
            console.log("now");
            setTodos([...todos, { id: Date.now(), ...data }]);
        }
        setFormOpen(false);


    };
    return (
        <>
            <div className="w-full bg-orange-100">
                <h1 className="text-5xl font-sans rounded text-black font-semibold text-left pl-4 pt-2">
                    Your Todos
                </h1>
                <br/>
                {/* Download */}
                <div className="flex space-x-4 justify-end p-4">
                    <button className='cursor-pointer ' onClick={Download}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 hover-stroke">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </button>
                </div>
                <hr className="border-t-2 border-gray-300 my-4 w-full" />
                {/* Todo List */}
                <div className="cursor-pointer flex flex-row gap-4">
                    {/* Add Todo */}
                    <button onClick={handleAdd} className='w-[150px] shadow-2xl h-[150px] bg-blue-300 rounded-lg justify-center px-9'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    {/* Todos */}
                    {todos.map(todo => {
                        const priorityStyle={
                            critical:{
                                bgColor:"bg-red-500",
                                color:"text-white"
                            },
                            important:{
                                bgColor:"bg-yellow-500"
                            },
                            notImportant:{
                                bgColor:"bg-white"
                                
                            }
                        };
                        const bgColor = priorityStyle[todo.Priority]?.bgColor || "bg-gray-300"; 

                        return (
                            <div key={todo.id} className={`cursor-pointer shadow-xl w-max h-max ${bgColor} rounded-lg items-center justify-center px-4`}>

                                    <h3 className="font-bold text-black">{todo.TodoName}</h3>
                                    <p className='text-sm text-black'>{todo.SubmissionDate} </p>
                                    <p className='text-blue-500 text-sm font-semibold'>{todo.Priority}</p><br/>
                                    {/* Functions */}
                                    <div className="flex flex-col items-start space-y-2 m-2">
                                        <button className="flex items-center justify-center gap-2 bg-yellow-500 text-red-500 font-semibold px-4 py-2 rounded-lg shadow-md " onClick={() => handleEdit(todo)}>
                                            Update
                                        </button>
                                        <button className="flex items-center justify-center gap-2 bg-black text-red-500 font-semibold px-4 py-2 rounded-lg shadow-md " onClick={() => handleDelete(todo.id)}>
                                            Delete
                                        </button>
                                    </div>
                            </div>
                        )})}                  
                    
                    
                </div>
                {isFormOpen && <Form onSubmit={handleFormSumbit} todo={Todo} />}
            </div>
        </>
    )
}

export default Header;
