import PropTypes from 'prop-types';
import Chip from "@material-ui/core/Chip";
import AddIcon from "@material-ui/icons/Add";
import {Divider, Paper, TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styling"

const CategoriesChips = props => {
  const maxCategoryLength = 30;
  const classes = styles()

  return (
    <div>
      <Paper component="ul" className={classes.root}>
        {props.categoriesChips.map((data) => {
          return (
            <li key={data.ID}>
              <Chip
                label={data.title}
                onDelete={() => props.deleteCategory(data.ID)}
                className={classes.chip}
                deleteIcon={
                  <IconButton className={classes.deleteButton} disabled={props.showTextField}>
                    <DeleteIcon/>
                  </IconButton>
                }
                onDoubleClick={() => console.log("DOUBLE CLICK")}
              />
            </li>
          );
        })}
        <li key="-1">
          {!props.showTextField && <Chip
            icon={<AddIcon/>}
            label="Create Category"
            onClick={() => props.setShowTextField(true)}
            className={classes.chip}
          />}
        </li>
        <li key="-2">
          {props.showTextField && <div className={classes.textFieldRoot}>
            <TextField
              autoFocus
              placeholder="New Category Name"
              value={props.newCategoryName}
              onChange={(e) => props.handleNameChange(e.target.value)}
              inputProps={{maxLength: maxCategoryLength,}}
              error={props.newNameError}
              helperText={(props.newNameError) ? props.newNameErrorText :
                `${props.newCategoryName.length}/${maxCategoryLength}`}
            />
            <IconButton className={`${classes.iconButton} ${classes.checkButton}`} disabled={props.newNameError}
                        onClick={() => props.createNewCategory()}>
              <CheckIcon/>
            </IconButton>
            <Divider className={classes.divider} orientation="vertical"/>
            <IconButton className={`${classes.iconButton} ${classes.closeButton}`}
                        onClick={() => {
                          props.setNewCategoryName('');
                          props.setShowTextField(false)
                        }}>
              <CloseIcon/>
            </IconButton>
          </div>
          }
        </li>
      </Paper>
    </div>
  );
};

CategoriesChips.propTypes = {
  categoriesChips: PropTypes.array,
  showTextField: PropTypes.bool,
  newCategoryName: PropTypes.string,
  newNameError: PropTypes.bool,
  newNameErrorText: PropTypes.string,
};

export default CategoriesChips;