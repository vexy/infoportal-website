import React from 'react';
import { Link } from 'react-router-dom';

import SurveyFeed from '../components/SurveyFeed';

import '../components/styling/Feed.css'

const Feed = () => {
    return (
        <main className='flex flex-column' style={StyleMain}>
            <Link to='/post' className='nostyle' style={StylePostSurvey}>
                Post A Survey
            </Link>

            <div className='feed-nav flex'>
                <div className='feed-search flex'>
                    <label for="feed-search-box">
                        <svg fill="#000000" height="18px" width="18px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                            <g> 
                                <path d="M278.718,0C150.086,0,45.435,104.65,45.435,233.282c0,55.642,19.592,106.789,52.228,146.928L0,477.872L34.128,512 l97.663-97.663c40.137,32.635,91.284,52.228,146.926,52.228C407.35,466.565,512,361.914,512,233.282S407.35,0,278.718,0z M278.718,418.299c-102.018,0-185.017-82.999-185.017-185.017S176.699,48.265,278.718,48.265s185.017,82.999,185.017,185.017 S380.736,418.299,278.718,418.299z"></path>
                            </g>
                        </svg>
                    </label>
                    <input type="text" id="feed-search-box" name="feed-search-box" placeholder='Search by survey title or question'/>
                </div>

                <div className='feed-sort'>
                    Sort
                </div>
            </div>

            <SurveyFeed/>
        </main>
    )
}

const StyleMain = {
    width: "942px", 
    gap: "var(--size-4)",
}
const StylePostSurvey = {
    padding: "calc(var(--size-3) - 2px) var(--size-3)",
    borderRadius: "256px",
    backgroundColor: "var(--primary)",
    width: "fit-content",
    color: "var(--white)"
}

export default Feed