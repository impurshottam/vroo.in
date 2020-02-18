import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';
const styles = theme => ({root: {}});
class Login extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                Login
            </div>
        )
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Login);