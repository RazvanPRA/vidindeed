import { Box, Divider, ScrollArea } from "@mantine/core";
import useStyles from "./ContentJobs.style";
import { jobs } from "../../../fakedata";
import Jobs from "../Jobs/Jobs";

interface ContentJobsProps {
  status: string;
}

const ContentJobs = ({ status }: ContentJobsProps) => {
  const { classes } = useStyles();
  const statusJobs =
    status == "All" ? jobs : jobs.filter((job) => job.status === status);

  return (
    <Box className={classes.content}>
      <Box className={classes.headerBox}>
        <Box fw={600} className={classes.date}>
          Date
        </Box>
        <Box fw={600} className={classes.service}>
          Service
        </Box>
        <Box fw={600} className={classes.link}>
          Photografher/Link
        </Box>
        <Box fw={600} className={classes.status}>
          Status
        </Box>
        <Box fw={600} className={classes.select}></Box>
        <Box fw={600} className={classes.btnZone}></Box>
      </Box>
      <Divider style={{ height: "1px" }} bg="#d4d4d4ff" />
      <ScrollArea h={500}>
        <Jobs statusJobs={statusJobs} />
      </ScrollArea>
    </Box>
  );
};

export default ContentJobs;
