import React, {Component} from 'react';
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        let myProjects;
        
        if(projects) {
            myProjects = projects.filter(x => x.authorId === auth.uid);        
        }

        if(myProjects && myProjects.length > 0) {
            return (
                <div className="dashboard container">
                    <div className="row">
                    <p className="system-name text-teal">My Basic Cards</p>
                        <div className="col1 s12 m6">
                            <ProjectList projects={myProjects} />
                        </div>
                        <div className="col s12 m5 offset-m1"></div>
                    </div>
                </div>
            )
        }

        return (
            <div className="dashboard container">
                <div className="row">
                <p className="system-name text-teal">My Basic Cards</p>
                    <div className="col1 s12 m6">
                        <p>You don't have any convention card.</p>
                        <p><NavLink to='/simple'>Create New Basic Card</NavLink></p>
                    </div>
                    <div className="col s12 m5 offset-m1"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.basic,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'basic' }
    ])
)(Dashboard)