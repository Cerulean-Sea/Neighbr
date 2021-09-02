import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '20px',
    overflowX: 'hidden',
    minWidth: '100vw'
  },
  postBtn: {
    position: 'absolute',
    marginTop: '10px',
    top: '0%',
    right: '20%',
    zIndex:2000,

    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  filterBtn: {
    position: 'absolute',
    marginTop: '10px',
    top: '0%',
    right: '30%',
    zIndex:2000,

    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    },
    margin: '0 auto',
    display: 'flex'
  },
  create: {
    marginTop: '5vh',
    textAlign: 'center'
  },
  postList: {
    '& div': {
      minWidth: '90%'
    }
  },
  filterFormHide: {
    position: 'absolute',
    left: '-100%',
    zIndex: 2000,
    transition: 'all 1s',
    backgoundColor: theme.palette.paper,
  },
  filterFormVisible: {
    position: 'absolute',
    left: '5%',
    zIndex: 2000,
    transition: 'all 1s',
    backgoundColor: theme.palette.paper,
  },
  switch: {
    '& .MuiSwitch-track': {
        backgroundColor:'#E76F51'
    }
  }

}))

export default useStyles;