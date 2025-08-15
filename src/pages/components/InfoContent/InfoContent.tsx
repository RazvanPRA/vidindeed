import {  Box } from "@mantine/core";
import useStyles from "./InfoContent.styled";
import type { InfoContentProps } from "./InfoContent.d";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InfoContent = ({ job }: InfoContentProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.content}>
      <Box className={classes.row}>
        <Box className={classes.block}>
          <Box className={classes.title}>Intro</Box>
          <Box className={classes.subTitle}>Intro Box</Box>
          <Box>8618 Edgemont Link, Edmoniton, Alberta</Box>
        </Box>
        <Box className={classes.block}>
          <Box className={classes.title}>Outro</Box>
          <Box className={classes.subTitle}>Outro Box:</Box>
          <Box>User chose not to have an outro</Box>
          <Box className={classes.subTitle}>Agent Image:</Box>
          <Box className={classes.alert}>
            User did Not uploade an Agent Image
          </Box>
          <Box>Put Outro Box in middle and for 4 seconds</Box>
        </Box>
      </Box>
      <Box className={classes.row}>
        <Box className={classes.block}>
          <Box className={classes.title}>Watermark</Box>
          <Box className={classes.subTitle}>Watermark:</Box>
          <Box className={classes.alert}>User did not upload a watermark</Box>
        </Box>
        <Box className={classes.block}>
          <Box className={classes.title}>Music</Box>
          <Box className={classes.subTitle}>Music File:</Box>
          <Box>Editor Chooses The Music</Box>
        </Box>
      </Box>
      <Box className={classes.row}>
        <Box className={classes.block}>
          <Box className={classes.title}>Box Layovers</Box>
          <Box>User chose not have text layovers</Box>
        </Box>
        <Box className={classes.block}>
          <Box className={classes.title}>Special Intstructions</Box>
          <Box className={classes.subTitle}>Instructions:</Box>
          <Box>
            Kindly start with the aerial view. This is a newly build show home.
            Please begin with an aerial view. If possible, try to cut the clips
            in time ith the rhythim of the song.
          </Box>
          <Box className={classes.subTitle}>Length Of Video:</Box>
          <Box>1 Min.</Box>
          <Box className={classes.subTitle}>Order Of Video Clips:</Box>
          <Box>
            Shot in order. But the drone clips come last because they ere shot
            last. They don't necessarlly have to come at the end.
          </Box>
          <Box className={classes.subTitle}>
            User selected EXCLUDE SOME VIDEO CLIPS, you are allowing the editor
            to not include video clips that seem redundant to get your video don
            to a certain length without making it look reshed. They will only
            remove video clips they feed that are duplicate rooms or views of
            the same area.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoContent;
