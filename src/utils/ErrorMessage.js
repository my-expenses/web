import {connect, useDispatch, useSelector} from "react-redux";
import {Snackbar} from "@material-ui/core";
import {closeAction} from "../actions/MessageActions";
import MuiAlert from '@material-ui/lab/Alert';

const ErrorMessage = () => {
  const message = useSelector(state => state.snackbar.message)

  const show = useSelector(state => state.snackbar.success || state.snackbar.error)

  const severity = useSelector(state => {
    if (state.snackbar.success)
      return "success"
    if (state.snackbar.error)
      return "error"

  })
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeAction())
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{vertical: "top", horizontal: "center"}}
        open={show}
        onClose={() => handleClose()}
      >
        <MuiAlert variant="filled" severity={severity}>{message}</MuiAlert>
      </Snackbar>
    </div>
  );
};

export default connect()(ErrorMessage);