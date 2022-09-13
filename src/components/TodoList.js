import React from 'react'
import '../assets/css/index.css';
import { Delete, Edit, Put } from '../service/api';

function TodoList({ todo, todoOperation, text, setText, isEdit, setIsEdit }) {
    const theme = JSON.parse(localStorage.getItem('theme'));

    const update = (todo) => {
        if (text.length > 2) {
            Edit(todoOperation, todo.id, { isCompleted: todo.isCompleted, id: todo.id, content: text })

        } else {
            alert("Content must be more than 3 words")
        }
        cancel();
    };
    const cancel = () => {
        setIsEdit(false);
    };
    const editNewContent = (todo) => {
        setText(todo.content);
        setIsEdit({ id: todo.id, edit: true });
    };

    return (
        <div>
            <li
                style={{ border: "none" }}
                className={theme === "dark"
                    ?
                    "list-group-item d-flex justify-content-between align-items-center dark"
                    :
                    "list-group-item d-flex justify-content-between align-items-center"
                }
                key={todo.id}>

                <div class="form-check form-switch">
                    <input className="form-check-input border border-opacity-10" type="checkbox" role="switch" checked={todo.isCompleted}
                        onChange={() =>
                            Put(todoOperation, todo.id, { ...todo, isCompleted: !todo.isCompleted })
                        } />
                </div>

                {isEdit.edit && isEdit.id === todo.id ?
                    (
                        <>
                            <input
                                className='form-control'
                                type="text"
                                value={text}
                                onChange={(event) =>
                                    setText(event.target.value)}
                            />
                            <button
                                onClick={() => update(todo)}
                                className='btn btn-sm btn-outline-success m-2 border border-opacity-10 rounded-2'> <i class="bi bi-hand-thumbs-up"></i></button>
                        </>
                    )
                    :
                    (<p className={todo.isCompleted === true ? "completed opacity-25" : ""}>{todo.content}</p>)}
                <div className='pl-2'>
                    <button
                        onClick={() => editNewContent(todo)}
                        className='btn btn-sm btn-outline-warning m-2 border border-opacity-10 rounded-2'> <i class="bi bi-pencil-square"></i></button>
                    <button
                        onClick={() => Delete(todoOperation, todo.id)}
                        className='btn btn-sm btn-outline-danger border border-opacity-10 rounded-2'> <i class="bi bi-trash3"></i></button>
                </div>
            </li>
        </div>
    )
}

export default TodoList
