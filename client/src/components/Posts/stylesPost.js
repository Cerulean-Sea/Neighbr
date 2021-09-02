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
    justifyContent: 'center'
  },
  avatar: {
    margin: '3%',
    width: '8%',
    height: '8%'
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
    justifySelf: 'center',
    alignSelf: 'center',
    fontSize: '85%',
    fontWeight: '600',
    color: '#fff'
  },
  typography: {
    padding: '.1rem',
  },
  Happenings: {
    // border: '2.5px solid #2A9D8F',
    backgroundColor: '#2A9D8F'
  },
  Swaps: {
    // border: '2.5px solid #E9C46A',
    backgroundColor: '#E3B644',
  },
  Safety: {
    // border: '2.5px solid #E76F51',
    backgroundColor: '#E76F51'
  },
  Favors: {
    // border: '2.5px solid #F4A261',
    backgroundColor: '#F18C3A'
  },
  ChitChat: {
    // border: '2.5px solid #264653',
    backgroundColor: '#264653'
  },
  menuItem: {
    color: '#264653',
    textDecoration: 'bold',
    '&:hover': {
      backgroundColor: '#F4A261'
    }
  }
}));
