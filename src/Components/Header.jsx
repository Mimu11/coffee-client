import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Header = props => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/signUp'>Sign up</NavLink>
            <NavLink to='/signIn'>Sign in</NavLink>
        </div>
    );
};

Header.propTypes = {

};

export default Header;