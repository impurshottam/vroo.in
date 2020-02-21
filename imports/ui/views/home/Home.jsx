import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom';

import 'aframe';
import Header from '../shared/Header';
const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    content: {
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 1
    },
    
    
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing(3, 0, 2)
    },
    layer: {
        width: '100%',
        height: 'calc(100vh - 64px)',
        position: 'absolute',
        marginTop: '64px'
    }
});
class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header loginButton="show" />                
                <a-scene vr-mode-ui="enabled: false">
                    <a-assets>
                        <img id="sky" src="images/360/sample1.jpg"/>
                    </a-assets>
                    <a-sky src="#sky"></a-sky>
                    <a-entity
                        rotation="0 0 0"
                        animation="property: rotation; to: 0 360 0; loop: true; dur: 50000">
                        <a-camera></a-camera>
                    </a-entity>
                </a-scene>
                <div className={classes.layer}></div>
                <Container className={classes.content} component="main" maxWidth="lg">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <img width="120" src="images/vroo-white-small.png"/>
                        <Typography
                            component="h1"
                            variant="h3"
                            style={{
                            color: 'white'
                        }}>
                            Making Virtual Tours Simple.
                        </Typography>
                        <Typography
                            style={{
                            color: 'white'
                        }}
                            align="left"
                            variant="subtitle2"
                            >
                            VROO Is India's First 360 Virtual Reality Tour Online Publishing Platform.
                        </Typography>
                        {/* <Typography
                            style={{
                            color: 'white'
                        }}
                            align="center"
                            variant="h6"
                            >
                            Click. Upload. Publish.
                        </Typography> */}
                        <Link to="/tours">
                        <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            className={classes.button}>
                            Get Started
                        </Button>
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Home);