import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { emailValidator } from "common/validator/emailValidator";
import EmailTextField from "components/base/EmailTextField";
import Logo from "components/base/logo";
import PasswordTextField from "components/base/PasswordTextField";
import { useInput } from "hooks/useInput";
import * as React from "react";

export default function Login(): JSX.Element {
  console.log("login");
  const username = useInput("", emailValidator);
  const password = useInput("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Grid container sx={{ height: "95vh" }} justifyContent="center">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 360,
        }}
        justifyContent="center"
      >
        <Logo />
        <Typography
          component="h1"
          variant="h6"
          sx={{
            marginTop: "30px",
            marginBottom: "70px",
          }}
        >
          Administrator Panel Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <EmailTextField error={username.error} onChange={username.onChange} />
          <PasswordTextField
            error={password.error}
            onChange={password.onChange}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            sx={{ mt: "47px" }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 0, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>

        <Typography
          component="h1"
          fontSize={12}
          color={"#5A5B5C"}
          sx={{
            marginTop: "73px",
            marginBottom: "20px",
          }}
        >
          © 2021 Newin Corp.
        </Typography>
      </Box>
    </Grid>
  );
}
