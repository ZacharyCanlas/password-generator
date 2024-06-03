import { Checkbox } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  SetStateAction,
} from "react";

type CustomCheckboxProps = {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  dataTest?: string;
};

const CustomCheckbox: FunctionComponent<CustomCheckboxProps> = ({
  checked,
  setChecked,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      sx={{
        color: "#E6E5EA",
        "&.Mui-checked": {
          color: "#A4FFAF",
        },
      }}
    />
  );
};

export default CustomCheckbox;
