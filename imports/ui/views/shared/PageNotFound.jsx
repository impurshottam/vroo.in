import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent:'center',
        backgroundColor:'rgb(232, 234, 237)'
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
        align:'center'
        // outline:'1px solid red'
    },
});
class PageNotFound extends Component {
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
                        404 Error
                    </Typography>
                    <Typography align="center" variant="body1" component="h1" gutterBottom>
                        {'Opps! Page does not found.'}
                    </Typography>
                </Container>
            </div>
        )
    }
}
PageNotFound.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(PageNotFound);