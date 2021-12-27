import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

type PasswordTextFieldProps = {
  error: boolean | undefined;
  onChange: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined;
};

export default function PasswordTextField({
  error,
  onChange,
}: PasswordTextFieldProps) {
  return (
    <TextField
      error={error}
      margin="normal"
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      onChange={onChange}
      size="small"
      helperText={error ? "Incorrect entry." : ""}
    />
  );
}
