import React from 'react'
import { Post } from '../service/api';
function AddTodo({ newTodo, setNewTodo, todoOperation }) {

    function sendTodo(event) {
        event.preventDefault();
        if (newTodo.content.length > 2) {
            Post(todoOperation, newTodo);
        } else {
            alert("Content must be more than 3 words")
        }
    }
    return (
        <div className="container">
            <div className='pt-3'>
                <form className='row g-2'>
                    <input
                        className='form-control form-control-lg text-center  border border-opacity-10'
                        type="text"
                        label="New Todo"
                        value={newTodo.content}
                        onChange={(event) =>
                            setNewTodo({ ...newTodo, content: event.target.value })
                        }
                        placeholder="Add a Todo..."
                        aria-label="add"
                        required
                    />
                    {newTodo.content.length > 2
                        ?
                        (<input type="submit" onClick={(event) => {
                            sendTodo(event)
                        }} className='btn btn-success d-inline-flex mb-3 px-2 py-1 fw-semibold text-light bg-success bg-opacity-30 border border-success border-opacity-10 rounded-2' value="Submit"></input>)
                        :
                        (<input type="submit" className='btn btn-outline-success d-inline-flex mb-3 px-2 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2' disabled value="Submit"></input>)}
                </form>
            </div>

        </div>
    )
}


export default AddTodo
