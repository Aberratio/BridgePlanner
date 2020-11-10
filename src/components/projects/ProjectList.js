import React from 'react';
import SimpleSummary from './SimpleSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map(simple => {
                return (
                    <Link to={'/basic/' + simple.id} key={simple.id}>
                        <SimpleSummary simple={simple} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList