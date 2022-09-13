import React from 'react'
import { useState, useEffect } from "react";

const Login = () => {
    const [name, setName] = useState(() => {
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
     
    });

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
    }, [name]);

    return (
        <div>
            <form className='row g-2'>
                <input
                    className='form-control text-center  border border-opacity-10'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Username"
                    aria-label="username"
                    required
                />
                <input type="submit" className='btn btn-outline-success border border-opacity-10 rounded-2' value="Login"></input>
            
            </form>
        </div>
    )
}

export default Login
