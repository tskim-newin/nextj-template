import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
// pages/index.js
import { useTranslation } from "next-i18next";

type EmailTextFieldProps = {
  error: boolean | undefined;
  onChange: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined;
};

export default function EmailTextField({
  error,
  onChange,
}: EmailTextFieldProps) {
  const { t } = useTranslation("common");

  console.log(t("loginEmailTitle"));
  return (
    <TextField
      error={error}
      margin="normal"
      fullWidth
      id="email"
      label={t("loginEmailTitle")}
      name="email"
      autoComplete="email"
      autoFocus
      onChange={onChange}
      size="small"
      helperText={error ? "Incorrect entry." : ""}
    />
  );
}
