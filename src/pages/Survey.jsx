import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Survey = () => {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div>
            <button onClick={() => navigate(-1)}>Nazad</button>
            <h2>Pitanje {params.questionId}</h2>
        </div>
    )
}

export default Survey