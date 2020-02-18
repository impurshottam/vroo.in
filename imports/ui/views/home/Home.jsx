import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';
const styles = theme => ({root: {}});
class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Home);