import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(theme => ({
  title: {
    flex: ""
  },
  incomeAvatar: {
    backgroundColor: "green",
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  expenseAvatar: {
    backgroundColor: "red",
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  chipText: {
    fontSize: "large",
    marginTop: theme.spacing(2)
  },
  deleteButton: {
    marginLeft: "auto",
    marginTop: "auto"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

}))