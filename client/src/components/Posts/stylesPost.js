import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    width: '55%',
    marginBottom: '2%',
    cursor: 'pointer'
  },
  card: {
    padding: theme.spacing(1),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: '5%',
    width: '8%',
    height: '8%',
  },
  fab: {
    marginLeft: 'auto',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '3% 2% 0 2%'
  },
  tag: {
    marginRight: '1rem',
    borderRadius: '1rem',
    padding: '0.2rem',
    textTransform: 'capitalize',
    justifySelf: 'center',
    alignSelf: 'center',
  },
  typography: {
    // flexBasis: '1',
  },
  happenings: {
    border: '3px solid #2A9D8F',
  },
  swaps: {
    border: '3px solid #E9C46A',
  },
  safety: {
    border: '3px solid #E76F51',
  },
  favors: {
    border: '3px solid #F4A261',
  },
  "chit-chat": {
    border: '3px solid #264653',
  }
}));
