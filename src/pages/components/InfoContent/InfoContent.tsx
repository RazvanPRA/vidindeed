import { Box } from "@mantine/core";
import useStyles from "./InfoContent.styled";
import type { InfoContentProps } from "./InfoContent.d";
import Block from "../Block/Block";

const InfoContent = ({ form, type }: InfoContentProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.content}>
      <Box className={classes.row}>
        <Block form={form} type={"intro"} allow={type} />
        <Block form={form} type="outro" allow={type} />
      </Box>
      <Box className={classes.row}>
        <Block form={form} type="watermark" allow={type} />
        <Block form={form} type="music" allow={type} />
      </Box>
      <Box className={classes.row}>
        <Block form={form} type="box layovers" allow={type} />
        <Block form={form} type="instructions" allow={type} />
      </Box>
    </Box>
  );
};

export default InfoContent;
