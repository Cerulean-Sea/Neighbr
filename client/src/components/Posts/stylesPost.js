import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    // minHeight: '100vh',
    width: '55%',
    marginBottom: '2%'
  },
  card: {
    padding: theme.spacing(1),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3%',
  },
  avatar: {
    marginRight: '5%',
    width: '8%',
    height: '8%'
  },
  fab: {
    marginLeft: 'auto',
  },
  footer: {
    margin: '3% 2% 0 2%'
  },
  tag: {
    marginRight: '35%'
  }
}))