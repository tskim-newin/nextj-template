import { useState, ChangeEvent } from "react";

type UseInputState = {
  value: string;
  error: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useInput = (
  text: string,
  validator?: (value: string) => boolean
): UseInputState => {
  const [value, setValue] = useState<string>(text);
  const [error, setError] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(validator != null && !validator(e.target.value));
    setValue(e.target.value);
  };

  return { value: value, error: error, onChange: onChange };
};
