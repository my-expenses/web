import {connect, useDispatch, useSelector} from "react-redux";
import {Snackbar} from "@material-ui/core";
import {closeAction} from "../actions/MessageActions";
import MuiAlert from '@material-ui/lab/Alert';

const ErrorMessage = () => {
  const message = useSelector(state => state.message)
  const error = useSelector(state => state.error)
  const success = useSelector(state => state.success)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeAction())
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{vertical: "top", horizontal: "center"}}
        open={success || error}
        onClose={() => handleClose()}
      >
        <MuiAlert variant="filled" severity={(success) ? "success" : "error"}>{message}</MuiAlert>
      </Snackbar>
    </div>
  );
};

export default connect()(ErrorMessage);