import { Modal, ScrollArea } from "@mantine/core";
import type { ModalCostumProps } from "./ModalCostum.d";
import useStyles from "./ModalCostum.styled";
import MultiInput from "../MultiInput/MultiInput";

const ModalCostum = ({ opened, closeModal, formJobs, onValue ,onAssign,options}: ModalCostumProps) => {
  const { classes } = useStyles();

  return (
    <Modal size={500} opened={opened} onClose={closeModal} withCloseButton={false} centered>
      <ScrollArea mah={200} className={classes.content}>
        <MultiInput onValue={onValue} options={options} formJobs={formJobs} onAssign={onAssign} />
      </ScrollArea>
    </Modal>
  );
};

export default ModalCostum;
