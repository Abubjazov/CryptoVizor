import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Button,
  Fade,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const PREFIX = "AppMenu";

const classes = {
  root: `${PREFIX}-root`,
  menuButton: `${PREFIX}-menuButton`,
  title: `${PREFIX}-title`,
  toolbar: `${PREFIX}-toolbar`,
};

const StyledFade = styled(Fade)(({ theme }) => ({
  [`& .${classes.root}`]: {
    flexGrow: 1,
  },

  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
  },

  [`& .${classes.title}`]: {
    flexGrow: 1,
  },
}));

const AppMenu: FC = () => {
  return (
    <StyledFade in timeout={1000}>
      <AppBar
        position="static"
        elevation={1}
        sx={{ marginTop: "5px", background: "#FFFFFF" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Typography color="primary" variant="h6" className={classes.title}>
            CryptoVizor
          </Typography>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </StyledFade>
  );
};

export default AppMenu;
