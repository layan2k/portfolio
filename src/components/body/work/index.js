import React from 'react'
import './work.css'
import Seperator from '../../common/social-contact/seperator/index'
import { WorkData } from '../../data/work'
import WorkCard from './work-card';

function Work() {
    const data= WorkData;
    return (
        <div className="work">
            <Seperator />
            <label className="section-title">Resume</label>
            <div className="worklist">
                {data.map((item)=>
                <WorkCard item={item}/>)}
            </div>

        </div>
    )
}

export default Work
