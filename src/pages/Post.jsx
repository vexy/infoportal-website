import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>Nazad</button>
            <p>
                Post
            </p>
        </div>
    )
}

export default Post