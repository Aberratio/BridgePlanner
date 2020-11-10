import React from 'react';
import moment from 'moment';

const SimpleSummary = ({simple}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <b className="card-title text-teal">{simple.systemName}</b>
                <p>Used by <i>{simple.firstPlayer} - {simple.secondPlayer}</i></p>
                <p className="grey-text">{moment(simple.createdAt.toDate()).calendar()}</p> 
            </div>
        </div>
    )
}

export default SimpleSummary