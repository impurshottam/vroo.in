import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
const styles = theme => ({
    krpano: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    }
});
krpano = null;
samplexmlstring = `<krpano>
    <!-- use the 'demotour-corfu' tour as example tour -->
    <include url="/krpano/examples/demotour-corfu/tour.xml" />

    <!-- remove the loading text -->
    <skin_settings loadingtext="" />

    <style name="textfield" type="text" background="false" css="font-size:14px; color:#FFFFFF; font-style:italic;" />
    <style name="scrollarea" url.flash="%VIEWER%/plugins/scrollarea.swf" url.html5="%VIEWER%/plugins/scrollarea.js" />
    <style name="button" type="text" background="true" backgroundalpha="0.2" css="font-size:14px; color:#FFFFFF;" border="true" bordercolor="0xFFFFFF" padding="2 4" />
    <style name="dragable" ondown="copy(sx,x);copy(sy,y);copy(mx,mouse.x);copy(my,mouse.y);asyncloop(pressed,set(x,calc(sx-mx+mouse.x));set(y,calc(sy-my+mouse.y)););" />
        
    </krpano>`;

class Krpano extends Component {
    loadPano(xml){
        embedpano({
            swf: "/krpano/krpano.swf",
            // xml:`/krpano/examples/blending-demo/blending-demo.xml`,
            xml:`/krpano/examples/blending-demo/${xml}`,
            target: "pano",
            html5: "always",
            mobilescale: 1.0,
            passQueryParameters: true,
            onready: this.krpano_onready_callback
        });
    }
    componentDidMount() {
        const {xml} = this.props;
        this.loadPano(xml)
        // setTimeout(() => {
        //     this.loadXml();
        // }, 100)
    }
    krpano_onready_callback(krpano_interface) {
        krpano = krpano_interface;
    }
    loadXml() {
        if (krpano) {
            const xmlstring = samplexmlstring;
            krpano.call("loadxml(" + escape(xmlstring) + ", null, MERGE, BLEND(0.5));");
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <div id="pano" className={classes.krpano}></div>
        );
    }
}

Krpano.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Krpano);
