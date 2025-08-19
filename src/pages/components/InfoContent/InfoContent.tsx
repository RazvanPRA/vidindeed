import { Box } from "@mantine/core";
import useStyles from "./InfoContent.styled";
import type { InfoContentProps } from "./InfoContent.d";
import Block from "../Block/Block";

const InfoContent = ({ form }: InfoContentProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.content}>
      <Box className={classes.row}>
        <Block form={form} type={"intro"} />
        <Block form={form} type="outro" />
      </Box>
      <Box className={classes.row}>
        <Block form={form} type="watermark" />
        <Block form={form} type="music" />
      </Box>
      <Box className={classes.row}>
        <Block form={form} type="box layovers" />
        <Block form={form} type="instructions" />
      </Box>
    </Box>
  );
};

export default InfoContent;
