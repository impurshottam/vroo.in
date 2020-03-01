import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import { Typography } from '@material-ui/core';
const styles = theme => ({root: {}});
class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                {/* <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p">
                    Something here to give the footer a purpose!
                </Typography> */}

            </div>
        );
    }
}
Footer.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Footer);