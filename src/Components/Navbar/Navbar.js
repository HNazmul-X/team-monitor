import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { lightBlue } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    myBg: {
        background: lightBlue[800],
    },
    myText : {
        color:"white",
        textDecoration: "none",
    }
}));

const Navbar = () => {
   const classes = useStyles();

   return (
       <div className={classes.root}>
           <AppBar className={classes.myBg} position="static">
               <Toolbar>
                   <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                       <MenuIcon />
                   </IconButton>
                   <Typography variant="h6" className={classes.title}>
                       Sports Mania
                   </Typography>
                   <Button color="inherit">
                       <Link ClassName={"nav-item"}>
                           <Typography ClassName={classes.myText}>Login</Typography>
                       </Link>
                   </Button>
               </Toolbar>
           </AppBar>
       </div>
   );
};

export default Navbar;