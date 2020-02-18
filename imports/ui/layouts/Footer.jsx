import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';
const styles = theme => ({root: {}});
class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <h1>Footer</h1>
        );
    }
}
Footer.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Footer);