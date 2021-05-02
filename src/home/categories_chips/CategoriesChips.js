import PropTypes from 'prop-types';
import Chip from "@material-ui/core/Chip";
import AddIcon from "@material-ui/icons/Add";
import {
  Checkbox,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider, FormControlLabel,
  Paper,
  TextField
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import styles from "../styling"
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CategoryChipUi from "./CategoryChipUI";

const CategoriesChips = props => {
  const maxCategoryLength = 30;
  const classes = styles()

  return (
    <div>
      <Paper component="ul" className={classes.root}>
        {!props.categoriesState.loading && props.categoriesState.categories.map((data) => {
          return (
            <li key={data.ID}>
              <CategoryChipUi
                category={data}
                handleEditDialogOpen={props.handleEditDialogOpen}
                showTextField={props.showTextField}
              />
            </li>
          );
        })}
        <li key="-1">
          {!props.showTextField && <Chip
            icon={<AddIcon/>}
            label={(props.categoriesState.categories.length < 10) ? "Create Category" : "Maximum 10 categories"}
            onClick={() => props.setShowTextField(true)}
            className={classes.chip}
            disabled={props.categoriesState.categories.length >= 10}
          />}
        </li>
        <li key="-2">
          {props.showTextField && <div className={classes.textFieldRoot}>
            <TextField
              autoFocus
              placeholder="New Category Name"
              value={props.typedCategoryName}
              onChange={(e) => props.handleNameChange(e.target.value)}
              inputProps={{maxLength: maxCategoryLength,}}
              error={props.nameError}
              helperText={(props.nameError) ? props.nameErrorText :
                `${props.typedCategoryName.length}/${maxCategoryLength}`}
            />
            <IconButton className={`${classes.iconButton} ${classes.checkButton}`} disabled={props.nameError}
                        onClick={() => props.createNewCategory()}>
              <CheckIcon/>
            </IconButton>
            <Divider className={classes.divider} orientation="vertical"/>
            <IconButton className={`${classes.iconButton} ${classes.closeButton}`}
                        onClick={() => {
                          props.setTypedCategoryName('');
                          props.setShowTextField(false)
                        }}>
              <CloseIcon/>
            </IconButton>
          </div>
          }
        </li>
      </Paper>

      <Dialog open={props.openEditDialog}
              onClose={() => props.handleEditDialogClose()}
      >
        <DialogTitle>Edit/Delete Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can edit the category name or delete the whole category from the database. Please note that deleting the
            category will NOT delete the transactions associated with it, but they will be UNCATEGORIZED
          </DialogContentText>
          <TextField
            autoFocus
            placeholder="Edit Category Name"
            value={props.typedCategoryName}
            onChange={(e) => props.handleNameChange(e.target.value)}
            inputProps={{maxLength: maxCategoryLength,}}
            error={props.nameError}
            helperText={(props.nameError) ? props.nameErrorText :
              `${props.typedCategoryName.length}/${maxCategoryLength}`}
          />
          <IconButton className={`${classes.iconButton} ${classes.checkButton}`} disabled={props.nameError}
                      onClick={() => props.updateCategory()}>
            <CheckIcon/>
          </IconButton>
          <Grid container>
            <Grid item sm={10}>
              <FormControlLabel
                control={<Checkbox checked={props.confirmDelete}
                                   onChange={(e) => props.setConfirmDelete(e.target.checked)}/>}
                label="I understand the consequences of deleting the category (please note that this action cannot be undone)"
              />
            </Grid>
            <Grid item>
              <Button disabled={!props.confirmDelete}
                      variant="outlined"
                      onClick={() => props.deleteCategory()}
                      className={classes.deleteButton}>
                Delete
              </Button>
            </Grid>
          </Grid>

        </DialogContent>
      </Dialog>

    </div>
  );
};

CategoriesChips.propTypes = {
  categoriesState: PropTypes.object,
  showTextField: PropTypes.bool,
  typedCategoryName: PropTypes.string,
  nameError: PropTypes.bool,
  nameErrorText: PropTypes.string,
  openEditDialog: PropTypes.bool,
  confirmDelete: PropTypes.bool,
};

export default CategoriesChips;