import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";
import CurrentUser from "../components/Current User/CurrentUser";
import AllUsers from "../components/All Users/AllUsers";

export const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const roles = user?.roles?.map((item) => item.value) || [];
  const isUser = roles.some((role) => role == "USER");
  const isAdmin = roles.some((role) => role == "ADMIN");

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!isUser) {
    navigate("auth/login");
  }

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Current user" value="1" />
              <Tab label="All users" disabled={!isAdmin} value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CurrentUser />
          </TabPanel>
          <TabPanel value="2">
            <AllUsers />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};
