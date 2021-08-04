import React from "react";
import { Radio, FormControlLabel, RadioGroup } from "@material-ui/core";

export const types: Record<string, string> = {
  a: "had a meeting with",
  b: "had a call with",
  c: "had a coffee with",
  d: "added a note to",
};

interface MessageTypesProps {
  onChange: (type: string | undefined) => void;
  checkedValue: string | undefined;
}

export const MessageTypes = ({ onChange, checkedValue }: MessageTypesProps) => {
  const typesList = Object.keys(types).map((type) => (
    <FormControlLabel
      label={type}
      control={
        <Radio
          checked={checkedValue === type}
          onChange={(e) => onChange(e.target.value)}
        />
      }
      value={type}
    />
  ));

  return <RadioGroup row>{typesList}</RadioGroup>;
};
