import {connect, useDispatch, useSelector} from "react-redux";
import {Snackbar} from "@material-ui/core";
import {closeAction} from "../actions/MessageActions";
import MuiAlert from '@material-ui/lab/Alert';

const ErrorMessage = () => {
  const message = useSelector(state => state.message)

  const show = useSelector(state => state.success || state.error)
  const severity = useSelector(state => {
    if (state.success)
      return "success"
    if (state.error)
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