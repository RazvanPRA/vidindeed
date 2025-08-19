import { Box, Button, Text } from "@mantine/core";
import type { JobProps } from "./Job.d";
import useStyles from "./Job.styled";
import MultiInput from "../MultiInput/MultiInput";
import { jobLabels } from "../../../const/label";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import ModalCostum from "../ModalCostum/ModalCostum";

type Status = "In Progress" | "Completed" | "Approved";

const Job = ({ job, open, form }: JobProps) => {
  const [openedAssign, { open: openAssign, close: closeAssign }] =
    useDisclosure(false);
  const [openedValue, { open: openValue, close: closeValue }] =
    useDisclosure(false);
  const options = [
    "Type1",
    "Type2",
    "Type3",
    "Type4",
    "Type5",
    "Type6",
    "Type7",
  ];
  const formJobs = useForm({
    mode: "uncontrolled",
    initialValues: {
      jobs: [
        {
          value: 0,
          typeJob: options[0],
          approved:false
        },
      ],
    },
  });

  const { classes, cx } = useStyles();
  const isValidStatus = (value: string): value is Status =>
    (["In Progress", "Completed", "Approved"] as const).includes(
      value as Status
    );

  return (
    <Box key={job.jobId} className={classes.bodyBox}>
      <Box className={classes.first}>
        <Box>
          <Text fw={600} span>
            {jobLabels.contentJob.idLabel}
          </Text>
          <Text span>{job.jobId}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            {jobLabels.contentJob.dateLabel}
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
            {jobLabels.contentJob.addressLabel}
          </Text>
          <Text span>{job.address}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            {jobLabels.contentJob.serviceLabel}
          </Text>
          <Text span>{job.service}</Text>
        </Box>
      </Box>
      <Box className={classes.third}>
        <Box>
          <Text fw={600} span>
            {jobLabels.contentJob.idDistributorLabelId}
          </Text>
          <Text span>{job.distribuitorID}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            {jobLabels.contentJob.boLabel}
          </Text>
          <Text span>{job.boEmail}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            {jobLabels.contentJob.emailLabel}
          </Text>
          <Text span>{job.photographerEmail}</Text>
        </Box>
        <Box>
          <Text span>{jobLabels.contentJob.filesLabel}</Text>
          <Text span>{job.source}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            {jobLabels.contentJob.instructionLabel}
          </Text>
          <Text span>{job.intructions}</Text>
        </Box>
        <Box>
          <Text fw={600} span>
            {jobLabels.contentJob.lengthLabel}
          </Text>
          <Text span>{job.length}</Text>
        </Box>
      </Box>
      <Box className={classes.fourth}>
        <Box  onClick={openValue}
            className={cx(classes.btnOption, classes.assign)}
            maw="90px">{jobLabels.contentJob.viewValue}</Box>
      </Box>
      <Box className={classes.fifth}>
        <Text fw={600} span>
          {jobLabels.contentJob.orderLabel}
        </Text>
        <Text span>{job.orderClips}</Text>
        <Box>{job.job}</Box>
        <Box>{job.sinn}</Box>
      </Box>
      <Box className={classes.sixth}>
        <MultiInput onTable options={options} formJobs={formJobs} />
      </Box>
      <Box className={classes.seventh}>
        <Box>
          <Box
            onClick={openAssign}
            className={cx(classes.btnOption, classes.assign)}
            maw="90px"
          >
            {jobLabels.contentJob.jobLabel}
          </Box>
          <Box
            className={cx(classes.btnOption, classes.view)}
            onClick={() => {
              form.setFieldValue("address", job.address);
              open();
            }}
            maw="80px"
          >
            {jobLabels.contentJob.viewLabel}
          </Box>
        </Box>
        {isValidStatus(job.status) ? (
          <Button
            disabled={job.status !== "In Progress" && isValidStatus(job.status)}
            className={cx(classes.btnOption, classes.complete)}
          >
            {jobLabels.contentJob.doneLabel}
          </Button>
        ) : (
          <></>
        )}
      </Box>
      <ModalCostum formJobs={formJobs} opened={openedValue} closeModal={closeValue} onValue options={options} />
      <ModalCostum formJobs={formJobs} opened={openedAssign} closeModal={closeAssign} onAssign options={options}/>
    </Box>
  );
};

export default Job;
