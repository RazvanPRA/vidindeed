import { Box, Modal } from "@mantine/core";
import type { JobsProps } from "./Jobs.d";
import InfoContent from "../InfoContent/InfoContent";
import { useDisclosure } from "@mantine/hooks";
import Job from "../Job/Job";
import { useForm } from "@mantine/form";
import type { form } from "../Job/Job.d";

// import useStyles from "./Jobs.styled";
// const { classes, cx } = useStyles();

const Jobs = ({ statusJobs }: JobsProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm<form>({
    mode: "uncontrolled",
    initialValues: {
      address: "",
      userChoice: "User chose not have an outro",
      imagesArray: [],
      watermark: [],
      musicFilesArray: [],
      text: "User chose not have text layovers",
      intructons: "Kindly start with the aerial view. This is a newly build show home. Please begin with an aerial view. If possible, try to cut the clips in time ith the rhythim of the song.",
      videoLength: '09:00:00',
      obs1: "Shot in order. But the drone clips come last because they ere shot last. They don't necessarlly have to come at the end.",
      obs2: "User selected EXCLUDE SOME VIDEO CLIPS, you are allowing the editor to not include video clips that seem redundant to get your video don to a certain length without making it look reshed. They will only remove video clips they feed that are duplicate rooms or views of the same area.",
    },
  });

  return (
    <Box>
      {statusJobs?.map((job) => (
        <Job job={job} open={open} form={form} />
      ))}
      <Modal opened={opened} fullScreen onClose={close}>
        <InfoContent form={form} />
      </Modal>
    </Box>
  );
};

export default Jobs;
