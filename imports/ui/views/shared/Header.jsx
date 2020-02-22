import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const styles = theme => ({
    navbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        background:'white'
    },
    gap: {
        flex: 1
    }
});
class Header extends Component {
    render() {
        const {classes, loginButton} = this.props;
        return (
            <Toolbar className={classes.navbar}>
                <Link to="/">
                    <img src="/images/vroo-black.png" width="80px"/>
                </Link>
                <span className={classes.gap}></span>
                {loginButton === 'show' && <Link to="/sign-in">
                    <Button variant="outlined" size="small">
                        Sign In
                    </Button>
                </Link>
}
            </Toolbar>
        );
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Header);