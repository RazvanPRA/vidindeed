import type { UseFormReturnType } from "@mantine/form";

export interface ModalCostumProps {
  opened: boolean;
  closeModal: () => void;
  formJobs: UseFormReturnType<
    {
      jobs: {
        value: number;
        typeJob: string;
        approved: boolean;
      }[];
    },
    (values: {
      jobs: {
        value: number;
        typeJob: string;
        approved: boolean;
      }[];
    }) => {
      jobs: {
        value: number;
        typeJob: string;
        approved: boolean;
      }[];
    }
  >;
  onValue?: boolean;
  onAssign?: boolean;
  options:string[]
}
