import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
      width: "100%",
      justify: "center",
    },
  },
}));