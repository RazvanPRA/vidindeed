import { Box, Input, NumberInput } from "@mantine/core";
import IconChevronDown from "../../../assets/icons/ChevronDown";
import Plus from "../../../assets/icons/Plus";
import Delete from "../../../assets/icons/Delete";
import useStyles from "./MultiInput.styled";
import type { MultiInputProps } from "./MultiInput.d";
import Approve from "../../../assets/icons/Approve";
import Remove from "../../../assets/icons/Remove";

const MultiInput = ({
  options,
  formJobs,
  onTable,
  onValue,
  onAssign,
}: MultiInputProps) => {
  const { classes } = useStyles();

  const addJob = () =>
    formJobs.insertListItem("jobs", { value: 100, typeJob: options[0] });
  const removeJob = (index: number) => formJobs.removeListItem("jobs", index);
  // const insertAt = (index: number) =>
  //   formJobs.insertListItem('jobs', { value: 0, typeJob: options[0] }, index);
  console.log(formJobs.getValues().jobs[0].typeJob);

  return (
    <Box className={classes.box}>
      {formJobs.values.jobs.map((_job, j) => {
        const valuePath = `jobs.${j}.value`;
        const typePath = `jobs.${j}.typeJob`;
        const approvedPath = `jobs.${j}.approved`;

        return (
          <Box key={formJobs.key(`jobs.${j}`)} className={classes.content}>
            <NumberInput
              value={formJobs.values.jobs[j].value}
              onChange={(val) => {
                const n =
                  typeof val === "number"
                    ? val
                    : Number((val ?? "").toString().replace(/\s/g, ""));
                formJobs.setFieldValue(valuePath, Number.isFinite(n) ? n : 0);
              }}
              rightSection="$"
              mr="2px"
              disabled={!onValue}
              thousandSeparator=" "
              w={172}
            />
            -
            <Input
              disabled={!onTable || formJobs.values.jobs[j].approved}
              component="select"
              value={formJobs.values.jobs[j].typeJob}
              onChange={(e) =>
                formJobs.setFieldValue(typePath, e.currentTarget.value)
              }
              rightSection={onTable && <IconChevronDown />}
              rightSectionPointerEvents="none" // ca să nu blocheze click-ul pe săgeată
              className={classes.input}
            >
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </Input>
            {onTable  ? (
              <Delete remove={() => removeJob(j)} />
            ) : (
            onAssign&&  <Box className={classes.groupBtn} >
                <Approve onClick={()=>formJobs.setFieldValue(approvedPath, true)}  />
                <Remove onClick={()=>formJobs.setFieldValue(approvedPath, false)}/>
              </Box>
            )}
          </Box>
        );
      })}
      {onTable && <Plus add={addJob} />}
    </Box>
  );
};

export default MultiInput;
