import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8)
  },
  card: {
    width: 500,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "inherit",
    alignItems: 'center'
    // alignItems: 'flex-start',
    // paddingLeft: 20
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
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

