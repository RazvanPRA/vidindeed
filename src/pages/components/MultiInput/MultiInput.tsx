import { Box, Input } from "@mantine/core";
import IconChevronDown from "../../../assets/icons/ChevronDown";
import { useState } from "react";
import Plus from "../../../assets/icons/Plus";
import Delete from "../../../assets/icons/Delete";
import useStyles from "./MultiInput.styled";

const MultiInput = () => {
  const { classes } = useStyles();
  const options = ["Editor", "b", "c", "d", "f", "g", "h"];
  const [inputValue, setInputValue] = useState(1);
  const arr = Array.from({ length: Math.max(0, Math.floor(inputValue)) });
  console.log(arr, "arr");

  return (
    <Box className={classes.box}>
     {arr.map((_i, j) => (
        <Box className={classes.content}>
            <Input /> $
       <Input
            key={j}
            component="select"
            rightSection={<IconChevronDown />}
            pointer
            className={classes.input}
          >
            {options.map((i) => (
              <option key={i} value="1">
                {i}
              </option>
            ))}
          </Input>
          <Delete setInputValue={setInputValue} />
        </Box>
      ))}
      <Plus setInputValue={setInputValue}  />
    </Box>
  );
};

export default MultiInput;
