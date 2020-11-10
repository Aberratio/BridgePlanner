import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut} from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/simple'>New Basic Card</NavLink></li>   
            {/* <li><NavLink to='/create'>New Advanced Card</NavLink></li>   */}
            <li><NavLink to='/' className='btn btn-floating teal lighten-1'>{props.profile.initials}</NavLink></li>
            <li><a href="/#" onClick={props.signOut}>Log Out</a></li>
          </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);