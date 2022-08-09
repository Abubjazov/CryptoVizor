import React, { FC } from "react";
import {
  AppBar,
  Button,
  Fade,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
  toolbar: {
    marginTop: "5px",
    background: "#FFFFFF",
  },
}));

const AppMenu: FC = () => {
  const classes = useStyles();

  return (
    <Fade in timeout={1000}>
      <AppBar position="static" elevation={1} className={classes.toolbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography color="primary" variant="h6" className={classes.title}>
            Polaris
          </Typography>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </Fade>
  );
};

export default AppMenu;
