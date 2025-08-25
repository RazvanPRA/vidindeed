import { useState } from "react";
import type { TextAreaBlockProps } from "./TextAreaBlock.d";
import { Box, Textarea } from "@mantine/core";

const TextAreaBlock = ({ value, form, type,allow }: TextAreaBlockProps) => {
  const [veiw, setView] = useState(true);

  return veiw ? (
    <Box onClick={() => !allow&&setView((state) => !state)}>{value}</Box>
  ) : (
   <Box style={{alignSelf:'stretch'}}>
       <Textarea value={value} onBlur={() => setView((state) => !state)} onChange={(event)=>form.setFieldValue(type, event.currentTarget.value)} />
   </Box> 
  );
};

export default TextAreaBlock;
