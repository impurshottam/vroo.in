import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import Header from './Header';
import Footer from './Footer';
const styles = theme => ({root: {}});
class Login extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Login);