import React from 'react'
import './work-card.css'

function WorkCard({item}) {
    return (
        <div className="work-card">
            <img src={item.companyLogo} alt={item.company} className="work-logo"/>
            <div className="work-info">
                <label className="company-name">{item.company}</label>
                <div className="work-dates">
                <label>{item.dateJoining}{" "}</label>-{" "}
                <label>{item.dateEnd}</label>
                </div>
                <div className="work-info"><label>Role:{" "}{item.Role}</label></div>
                <div className="work-description">
                    {item.work}
                </div>
            </div>


        </div>
    )
}

export default WorkCard
