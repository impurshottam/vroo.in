import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import { Typography, Link } from '@material-ui/core';
const styles = theme => ({root: {}});
class Copyright extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://vroo.in/">
                    vroo.in
                </Link>{' '} {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
}
Copyright.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Copyright);