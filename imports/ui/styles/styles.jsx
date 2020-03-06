import { red } from "@material-ui/core/colors";

export default theme => ({
  
 
  // headerDesktop: {
  //   display: 'none',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'flex',
  //   },
  // },
  // headerMobile: {
  //   display: 'flex',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'none',
  //   },
  // },



  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  homePageContentOverlay: {
    width: "100%",
    height: "calc(100vh - 64px)",
    position: "absolute",
    marginTop: "64px"
  },
  content: {
    height: "calc(100vh - 124px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 1
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing(3, 0, 2)
  },
  fontWhite: {
    color: "white"
  },
  fontBlack: {
    color: "black"
  },
  navbar: {
    background: "white"
  },
  navbarTransparent: {
    background: 'transparent',
    zIndex:1
  },
  gap: {
    flex: 1
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },

  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 5)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    padding: theme.spacing(6)
  },
  cardRoot: {
    position: "relative"
  },
  noCardGirl: {
    textAlign: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  cardActions: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
    zIndex: "1"
  },
  cardOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    left: 0,
    bottom: 0,
    background:
      "linear-gradient(to top, rgba(32, 33, 36, 1), rgba(32, 33, 36, 0) 100px);"
  },
  noCard: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  cardMediaImage: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%"
  },
  cardMediaSkeleton: {
    paddingTop: "56.25%"
  },
  chipsWrapper: {
    position: "absolute",
    left: theme.spacing(1),
    top: 0
  },
  cardChip: {
    alignSelf: "flex-start",
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  gridList: {
    width: "100%",
    height: "auto"
  },
  gridRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  topButtonGroup: {
    marginTop: theme.spacing(1)
  },
  cardTitleSkeleton: {
    color: "white",
    position: "absolute",
    bottom: theme.spacing(2)
  },
  cardImage: {
    backgroundSize: "cover",
    height: 0,
    paddingTop: "56.25%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  krpano: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  }

});
