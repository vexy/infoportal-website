import React from 'react';
import { Link } from 'react-router-dom';

import questions from '../assets/questions.json';

const Feed = () => {
    return (
        <main>
            <Link to='/post'>
                <button>
                    Post A Survey
                </button>
            </Link>
            <section>
                <div>
                    Search Bar
                </div>

                <ul>
                    {
                        questions.map((q)=>
                            <Link to={`/feed/${q.id}`} >
                                <li key={q.id}>
                                    {q.title}
                                </li>
                            </Link>
                        )
                    }
                </ul>
            </section>
        </main>
    )
}

export default Feed