import React from 'react'
import { Link } from 'react-router-dom';

import surveys from '../assets/questions.json';

const SurveyFeed = () => {
    return (
        <ul className="flex flex-column" style={StyleFeed}>
            {
                surveys.map((s) =>
                    <Link key={s.id} to={`/feed/${s.id}`} className="nostyle flex flex-column" style={StyleFeedSurvey}>
                        <div className="flex flex-main-space-between" style={{ fontSize: "var(--size-2)" }}>
                            <div style={StyleLocation}>
                                Srbija
                            </div>
                            <div>
                                {s.answerCount} votes
                            </div>
                        </div>

                        <div>
                            {s.title}
                        </div>

                        <div className="flex" style={{ fontSize: "var(--size-2)", color:"var(--grey)", gap:"var(--size-1)" }}>
                            {
                                s.questions.map((q)=>
                                    <span>{q.question}</span>
                                )
                            }
                        </div>
                    </Link>
                )
            }
        </ul>
    )
}

const StyleFeed = {
    gap: "var(--size-4)"
};
const StyleFeedSurvey = {
    gap: "var(--size-1)",
    padding: "var(--size-2) var(--size-3)",
    backgroundColor:"var(--white)",
    borderRadius:"4px",
    fontSize: "var(--size-3)"
};
const StyleLocation = {
    color:"var(--secondary)"
}

export default SurveyFeed