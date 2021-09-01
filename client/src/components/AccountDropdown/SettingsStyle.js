import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  save: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    width: '20ch',
    marginTop: theme.spacing(8)
  },
}));