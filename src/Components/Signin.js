import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { Component } from "react";
import { Redirect } from "react-router";
// import { Link } from "react-router-dom";
// import Appbar from "./Appbar";
import firebaseDb from "../Firebase";

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  Card: {
    marginTop: theme.spacing(10),
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const initials = {
  isServiceProvider: false,
  isLoggedIn: false,
  isUser: false,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initials;
  }
  handleTheme = () => {
    this.setState({ themeChange: !this.state.themeChange });
  };
  handleInputChange = (f) => {
    f.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    firebaseDb
      .database()
      .ref("Login/" + username)
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          let dataRetrieved = snapshot.val();
          if (dataRetrieved.position === "User") {
            if (password === dataRetrieved.Password) {
              this.setState({ isLoggedIn: true });
              this.setState({ isUser: true });
              localStorage.setItem("token", username);
              localStorage.setItem("Position", dataRetrieved.position);
            } else {
              alert("Incorrect Password");
            }
          } else if (dataRetrieved.position === "Service") {
            if (password === dataRetrieved.Password) {
              this.setState({ isLoggedIn: true });
              this.setState({ isServiceProvider: true });
              localStorage.setItem("token", username);
              localStorage.setItem("Position", dataRetrieved.position);
            } else {
              alert("Incorrect Password");
            }
          }
        } else {
          alert("User Not Found");
        }
      });
  };

  render() {
    const { classes } = this.props;
    const theme = createMuiTheme({
      palette: {
        type: this.state.themeChange ? "light" : "dark",
      },
    });
    if (this.state.isAdmin && this.state.isLoggedIn) {
      return <Redirect to="/Home" />;
    }

    if (
      this.state.isLoggedIn &&
      localStorage.getItem("token") &&
      localStorage.getItem("Position") === "User"
    ) {
      return <Redirect to="/ProviderDetails" />;
    }

    if (
      this.state.isLoggedIn &&
      localStorage.getItem("token") &&
      localStorage.getItem("Position") === "Service"
    ) {
      return <Redirect to="/AddressForm" />;
    }

    return (
      <ThemeProvider theme={theme}>
        {/* <Appbar theme={this.state.themeChange} handle={this.handleTheme} /> */}
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Phone number"
                name="email"
                // autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleInputChange}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link to="/ForgetPassword" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  {/* <Link to="/Signupnew" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link> */}
                </Grid>
              </Grid>
            </form>
          </div>

          {/* <Box mt={8}>
        <Copyright />
      </Box> */}
        </Container>
      </ThemeProvider>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(Login);
