import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    boxShadow: "none",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  textFieldRoot: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  checkButton: {
    color: "green"
  },
  closeButton: {
    color: "red"
  },
  deleteButton: {
    color: "red"
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));