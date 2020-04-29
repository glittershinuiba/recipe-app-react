import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


function Dialogs(props) {
  const open = props.open;
  const setOpen = props.setOpen;
  const showdetails = (id) => {
    open[id]=true;
    setOpen([...open]);
  }
  const handleClose = (id) => {
    open[id]=false;
    setOpen([...open]);
  };
  return (
    <>
      <Button size="small" color="primary" onClick={()=>showdetails(props.json.idCategory)}>
        Learn More 
      </Button>

      <Dialog onClose={()=>handleClose(props.json.idCategory)} open={open[props.json.idCategory]}>
        <DialogTitle onClose={()=>handleClose(props.json.idCategory)}>
          {props.json.strCategory}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {props.json.strCategoryDescription}
          </Typography>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>handleClose(props.json.idCategory)} color="primary">
            close
            </Button>
        </DialogActions>
      </Dialog>
    </>);
}

export default Dialogs;
