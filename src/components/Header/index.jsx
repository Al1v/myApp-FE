import React from "react";
import Button from "@mui/material/Button";
import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { stateLogout } from "../../hooks/authHook";

export const Header = () => {
  const { isAuth } = useSelector((state) => state.auth);

  function onLogout() {
    stateLogout();
  }

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo}>
            <div>MY APP</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Button onClick={onLogout} variant="contained" color="error">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth/login">
                  <Button variant="outlined">Login</Button>
                </Link>
                <Link to="/auth/register">
                  <Button variant="contained">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
