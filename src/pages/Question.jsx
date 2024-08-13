import React from 'react'
import { useParams } from 'react-router-dom'

const Question = () => {
    const params = useParams();

    return (
        <div>
            <h2>Pitanje {params.questionId}</h2>
            <h3 style={{fontStyle:"italic"}}>Ovde bi pisalo pitanje</h3>
            <p style={{fontStyle:"italic"}}>Odgovor</p>
            <button>Dugme</button>
        </div>
    )
}

export default Question