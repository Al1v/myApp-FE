import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Form, useActionData, useNavigation } from "react-router-dom";
import styles from "./Login.module.scss";

export const Registration = () => {
  const [avatarUrl, setAvatarUrl] = React.useState();
  const [nameError, setnameError] = React.useState();
  const [emailError, setEmailError] = React.useState();
  const [passwordError, SetPasswordError] = React.useState();
  const [error, setError] = React.useState();

  const data = useActionData();
  console.log({data})
  const errMsg = data && data.message ? data.message : null;
  console.log({errMsg})
  React.useEffect(() => {
    setEmailError();
    SetPasswordError();
    setnameError();

    if (errMsg) {
      if(Array.isArray(errMsg)){
      for (let err of errMsg) {
        defineErrType(err)
      }
    }else{
      defineErrType(errMsg)
    }
    }

    function defineErrType(err){
      if (err.includes("email")) {

        setEmailError(err);
      } else if (err.includes("password")) {

        SetPasswordError(err);
      } else if (err.includes("fullName")) {

        setnameError(err);
      } else {

        setnameError(err);
      }
    }
  }, [errMsg]);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Paper classes={{ root: styles.root }}>
      <Form method="POST">
        <Typography classes={{ root: styles.title }} variant="h5">
          Create account
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
        </Typography>

        <br />
        <TextField
          className={styles.field}
          label="Full name"
          id="name"
          name="name"
          error={nameError}
          helperText={nameError}
          fullWidth
        />
        <TextField
          className={styles.field}
          id="email"
          name="email"
          label="E-Mail"
          error={emailError}
          helperText={emailError}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Password"
          fullWidth
          id="password"
          name="password"
          error={passwordError}
          helperText={passwordError}
        />
        <Button
          disabled={isSubmitting}
          type="SUBMIT"
          size="large"
          variant="contained"
          fullWidth
        >
          Sign up
        </Button>
      </Form>
    </Paper>
  );
};
