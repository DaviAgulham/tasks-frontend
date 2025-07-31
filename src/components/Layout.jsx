import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Layout = () => (
  <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
        <Button variant="contained"sx={{ bgcolor: "#1a1a1a", "&:hover": { bgcolor: "#333" } }}component={Link}to="/">Tareas</Button>
      </Toolbar>
    </AppBar>

    <Box sx={{flexGrow: 1, position: "relative", display: "flex", justifyContent: "center", alignItems: "center",bgcolor: "#222"}}>
      <Outlet />
    </Box>
  </Box>
);

export default Layout;
