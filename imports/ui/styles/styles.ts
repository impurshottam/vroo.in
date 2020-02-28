export default theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    homePageContentOverlay: {
        width: '100%',
        height: 'calc(100vh - 64px)',
        position: 'absolute',
        marginTop: '64px'
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
    fontWhite : {
        color: "white"
    },
        navbar: {
        background:'white'
    },
    gap: {
        flex: 1
    },
        avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
        form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
});