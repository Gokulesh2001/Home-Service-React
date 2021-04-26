import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useEffect, useState } from "react";
import firebaseDb from "../Firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function AddressForm() {
  const InititalValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    service: "",
    zip: ""
  };

  var [values, setValues] = useState(InititalValues);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    setValues({ ...InititalValues });
    // firebaseDb.database().ref("Login/").push("hello");
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("fn called");
    alert("Details Submitted");
    // var name   = values.Email.substring(0, values.Email.lastIndexOf("@"));
    firebaseDb.database().ref("Address/").child(values.address).set({
        FirstName: values.firstName,
        LastName: values.lastName,
        Email: values.email,
        Address: values.address,
        City: values.city,
        Service: values.service,
        Zip: values.zip
    });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Service provider Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            onChange={handleInputChange}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            onChange={handleInputChange}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line "
            onChange={handleInputChange}
            fullWidth
            autoComplete="shipping address-line"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="Email id"
            onChange={handleInputChange}
            fullWidth
            autoComplete="email"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange={handleInputChange}
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            onChange={handleInputChange}
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="service"
            name="service"
            label="Service"
            onChange={handleInputChange}
            fullWidth
            autoComplete="Service"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
