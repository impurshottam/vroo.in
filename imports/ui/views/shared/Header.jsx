import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';
const styles = theme => ({root: {}});
class Header extends Component {
    render() {
        const {classes} = this.props;
        return (
            <h1>Header</h1>
        );
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Header);