import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Survey = () => {

    const questions = [
        {
            id: 1,
            question: "Da li želite novi most?",
        },
        {
            id: 2,
            question: "Da li ste zadovoljni sa...",
        },
        {
            id: 3,
            question: "Gde želite...",
        }
    ]

    return (
        <main style={{display:"flex", gap:"100px"}}>
            <div>
                <h1>Ovde su sva pitanja (npr)</h1>
                <Link to='/'>Home</Link>
                <ul>
                    {
                        questions.map((q)=>
                            <li key={q.id}>
                                <NavLink to={`/survey/${q.id}`} 
                                    style={({isActive}) => {
                                        return isActive ? {color:'gold', fontWeight:'bold'} : undefined;
                                    }
                                }>
                                    {q.question}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>
            <Outlet/>
        </main>
    )
}

export default Survey