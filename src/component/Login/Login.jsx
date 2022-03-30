import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.css";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      id="copyright"
    >
      {`©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science  Group,LLC.`}
      <Link color="inherit" href="">
        {" "}
        Cookie Preferences, Privacy, and Terms.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        className="whiteLogin"
        component="main"
        sx={{ height: "100vh" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 4,
              mx: 8,
              display: "flex",
              flexDirection: "column",
              //   alignItems: "center",
            }}
          >
            <Avatar
              img={{
                m: 1,
                bgcolor: "secondary.main",
                backgroundImage:
                  "https://login.mailchimp.com/release/1.1.1cf6f186fff809e72c1926a6889fdf8a84b938d52/images/brand_assets/logos/mc-freddie-dark.svg",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h4"
              //   fontSize={}
              fontWeight="light"
              style={{ color: "#241c15" }}
              fontFamily={
                ("Means Web", "Georgia", "Times", "Times New Roman", "serif")
              }
            >
              Login In
            </Typography>
            <div id="needMailchimp">
              Need a Mailchimp account?{" "}
              <span id="createAcount">Create an account</span>{" "}
            </div>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <div id="username">Username</div>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                // label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <div id="username">Password</div>

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                // label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "rgb(0,124,137)" }}
              >
                Sign In
              </Button>
              <FormControlLabel
                id="checkbox"
                control={<Checkbox value="remember" color="primary" />}
                label="Keep me logged in"
              />
              <Grid container>
                <div className="forgotPasswordUsername">
                  <Link>Forget username?</Link>
                  <Link>Forget password?</Link>
                </div>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
