import styles from "./styling";
import cardStyles from "../home/TransactionCardStyling"
import Grid from "@material-ui/core/Grid";
import {
  Card, CardActions,
  CardHeader,
  CssBaseline,
  Paper,
  Tooltip
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";
import Chip from "@material-ui/core/Chip";

const Landing = () => {
  const classes = styles();
  const cardClasses = cardStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={4} md={7} className={classes.image} >

      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
        <Grid item xs={12}>
          <Card className={cardClasses.card} elevation={6}>
            <CardHeader
              avatar={
                <Tooltip title={500} arrow>
                  <Avatar className={cardClasses.incomeAvatar}>
                    500
                  </Avatar>
                </Tooltip>
              }

              title="First Transaction"
              subheader={new moment(new Date()).format("llll")}
              titleTypographyProps={{variant: "h6"}}
              subheaderTypographyProps={{variant: "subtitle1"}}
              action={
                <Chip
                  label="Category No. 1"
                  color="primary"
                  className={cardClasses.chipText}
                />
              }
            />

            <CardActions disableSpacing className={cardClasses.cardActions}>
              <Button size="small">Edit</Button>
              <Button size="small" className={cardClasses.deleteButton} color="secondary">Delete</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;