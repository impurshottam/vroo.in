import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';

// import material ui components
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

//import style
import styles from "../../styles/styles";

// import constants
import { TEXT } from "../../constants/Text";

class NotFound extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <Container component="main" className={classes.main} maxWidth="sm">
                    <div style={{textAlign:'center'}}>   
                        <ErrorOutlineIcon fontSize="large"/>                        
                    </div>
                    <Typography align="center" variant="h6" component="h1" gutterBottom>
                        {TEXT.ERROR_404}
                    </Typography>
                    <Typography align="center" variant="body1" component="h1" gutterBottom>
                        {TEXT.NOT_FOUND}
                    </Typography>
                </Container>
            </div>
        )
    }
}
NotFound.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(NotFound);