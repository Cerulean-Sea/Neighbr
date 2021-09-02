import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '20px'
  },
  postBtn: {
    position: 'absolute',
    top: '0%',
    right: '12%',
    zIndex:2000,

    backgroundColor: theme.palette.secondary.main,
    fontSize: '1vw',
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  filterBtn: {
    position: 'absolute',
    top: '0%',
    right: '24%',
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
    backgoundColor: theme.palette.primary.main,
  },
  filterFormVisible: {
    position: 'absolute',
    margin: 0,
    padding:'15px',
    borderRadius: '0px 5px 5px 0px',
    left: '5%',
    zIndex: 2000,
    transition: 'all 1s',
    backgroundColor: theme.background.default,
    boxShadow: theme.shadows[3]
  },
  switch: {
    '& .MuiSwitch-track': {
        backgroundColor:'#E76F51'
    }
  }

}))

export default useStyles;