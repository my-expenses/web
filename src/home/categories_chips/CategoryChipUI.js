import PropTypes from 'prop-types';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Chip from "@material-ui/core/Chip";
import styles from "../styling";

const CategoryChipUi = props => {
  const classes = styles()
  return (
    <Chip
      label={props.category.title}
      onDelete={() => props.handleEditDialogOpen(props.category)}
      className={classes.chip}
      deleteIcon={
        <IconButton disabled={props.showTextField}>
          <EditIcon/>
        </IconButton>
      }
      onDoubleClick={() => console.log("DOUBLE CLICK")}
    />
  );
};

CategoryChipUi.propTypes = {
  category: PropTypes.object,
  handleEditDialogOpen: PropTypes.func,
  showTextField: PropTypes.bool,
};

export default CategoryChipUi;