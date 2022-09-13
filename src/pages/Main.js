import React, { useEffect, useState } from 'react'
import '../assets/css/index.css';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { Get } from '../service/api';
import Theme from '../pages/Theme';

const Main = ({ theme }) => {

    const name = JSON.parse(localStorage.getItem('name'));
    const [isEdit, setIsEdit] = useState({ id: "", edit: false });
    const [text, setText] = useState({
        content: "",
        isCompleted: false,
    });
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({
        content: "",
        isCompleted: false,
    });

    const logout = () => {
        window.location.reload()
        localStorage.clear();
      };
    const todoOperation = (type, value) => {
        switch (type) {
            case "get":
                setTodos(value);
                break;
            case "create":
                setTodos([...todos, value]);
                setNewTodo({
                    content: "",
                    isCompleted: false,
                });
                break;
            case "update":
                setTodos(todos.map((todo) => todo.id === value.id ? value : todo));
                break;
            case "edit":
                setText(todos.map((todo) => todo.id === value.id ? value : todo));
                break;
            case "delete":
                setTodos(todos.filter((todo) => todo.id !== value));
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        Get(todoOperation);
    }, []);
    return (
        <div className={`container ${theme} pt-5`}>
         <button onClick={logout} className='btn btn-sm btn-outline-secondary border border-opacity-10 rounded-2'>
                        Logout <i class="bi bi-box-arrow-right"></i>
                    </button>
            <h3 className='text-center'>React Todo App</h3>
            <div className='container d-flex justify-content-between align-items-center'>
                <div className="row pt-5">
                    <small className='d-inline-flex mb-3 px-2 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2'>Welcome {name}</small>
                </div>
                <div className="row pt-5">
                    <Theme />
                </div>
            </div>
            <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} todoOperation={todoOperation} />
            <div className='pt-2'>
                <ul className='list-group list-group-flush'>
                    {todos.length > 0 ? todos.map((todo) => (
                        <TodoList key={todo.id} todo={todo} newTodo={newTodo} text={text} setText={setText} setNewTodo={setNewTodo} isEdit={isEdit} setIsEdit={setIsEdit} todoOperation={todoOperation} />
                    )) : <p className='alert alert-warning  bg-opacity-10 border border-opacity-10 rounded-2'>so, why do people use ToDo lists? anyway...</p>
                    }
                </ul>
            </div>
        </div>
    )

}

export default Main;

