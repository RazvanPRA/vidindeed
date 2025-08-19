import { Box, Text } from "@mantine/core";
import type { JobProps } from "./Job.d";
import useStyles from "./Job.styled";
import MultiInput from "../MultiInput/MultiInput";

const Job = ({ job, open, form }: JobProps) => {
  const { classes, cx } = useStyles();

  return (
    <Box key={job.jobId} className={classes.bodyBox}>
      <Box className={classes.first}>
        <Box>
          <Text fw={600} span>
            JOB ID:
          </Text>
          <Text span>{job.jobId}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            Created:
          </Text>
          <Text span>{job.created}</Text>
        </Box>
        <Box className={classes.timeZone}>
          <Text className={classes.timeZoneText} fw={600}>
            {job.typeZone}
          </Text>
        </Box>
      </Box>
      <Box className={classes.second}>
        <Box>
          <Text fw={600} span>
            Adress
          </Text>
          <Text span>{job.address}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            Service
          </Text>
          <Text span>{job.service}</Text>
        </Box>
      </Box>
      <Box className={classes.third}>
        <Box>
          <Text fw={600} span>
            Distributor ID:
          </Text>
          <Text span>{job.distribuitorID}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            BO Email:
          </Text>
          <Text span>{job.boEmail}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            Photographer Email:
          </Text>
          <Text span>{job.photographerEmail}</Text>
        </Box>
        <Box>
          <Text span>Source Files:</Text>
          <Text span>{job.source}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            Intructons:
          </Text>
          <Text span>{job.intructions}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            Length Of Video:
          </Text>
          <Text span>{job.length}</Text>
        </Box>
      </Box>
      <Box className={classes.fourth}>
        <Text fw={600} span>
          Order Of Video Clips
        </Text>
        <Text span>{job.orderClips}</Text>
        <Box>{job.job}</Box>
        <Box>{job.sinn}</Box>
      </Box>
      <Box className={classes.fifth}>
        <MultiInput />
      </Box>
      <Box className={classes.sixth}>
        <Box>
          <Box className={cx(classes.btnOption, classes.assign)} maw="90px">
            Assign Job
          </Box>
          <Box
            className={cx(classes.btnOption, classes.view)}
            onClick={() => {
              form.setFieldValue("address", job.address);
              open();
            }}
            maw="80px"
          >
            Job View
          </Box>
        </Box>
        <Box className={cx(classes.btnOption, classes.complete)}>
          Complete Job
        </Box>
      </Box>
    </Box>
  );
};

export default Job;
