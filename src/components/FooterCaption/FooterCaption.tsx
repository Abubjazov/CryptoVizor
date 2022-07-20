import React, { FC } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: "#f1f6ff",
      padding: `${theme.spacing(8, 28)}`,

      [theme.breakpoints.down(1400)]: {
        padding: `${theme.spacing(8, 16)}`,
      },

      [theme.breakpoints.down(1240)]: {
        padding: `${theme.spacing(8)}`,
      },

      [theme.breakpoints.down("sm")]: {
        padding: `${theme.spacing(4, 12)}`,
        textAlign: "center",
      },

      [theme.breakpoints.down("xs")]: {
        fontSize: "0.7em",
        padding: theme.spacing(4),
      },
    },

    icon: {
      fontSize: theme.typography.caption.fontSize,
    },
    socialShare: {
      color: 'red',
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(4),
      },
    },
  })
);

interface FooterCaptionProps {
  text: string;
}

const FooterCaption: FC<FooterCaptionProps> = ({ text }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.container}>
      <Grid
        container={true}
        direction={isSmDown ? "column" : "row"}
        alignItems={"center"}
        justify={isSmDown ? "center" : "space-between"}
      >
        <Grid item={true}>
          <Typography color="textPrimary" variant="body1">
            {text}
          </Typography>
        </Grid>
        <Grid item={true} className={classes.socialShare}>
          13
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterCaption;
