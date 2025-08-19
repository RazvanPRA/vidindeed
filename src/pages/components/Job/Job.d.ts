import type { UseFormReturnType } from "@mantine/form";

export type form = {
  address: string;
  userChoice: string;
  imagesArray: never[];
  watermark: []
  musicFilesArray: never[];
  text: string;
  intructons: string;
  videoLength: string;
  obs1: string;
  obs2: string;
};

export interface JobProps {
  job: {
    jobId: string;
    created: string;
    typeZone: string;
    address: string;
    service: string;
    distribuitorID: string;
    boEmail: string;
    photographerEmail: string;
    source: string;
    intructions: string;
    length: string;
    orderClips: string;
    job: string;
    sinn: string;
    status: string;
    workerList: { id: string; firstName: string; lastName: string }[];
  };
  open: () => void;
  form: UseFormReturnType<
    {
      address: string;
      userChoice: string;
      imagesArray: never[];
      watermark: []
      musicFilesArray: never[];
      text: string;
      intructons: string;
      videoLength: string;
      obs1: string;
      obs2: string;
    },
    (values: {
      address: string;
      userChoice: string;
      imagesArray: never[];
      watermark: []
      musicFilesArray: never[];
      text: string;
      intructons: string;
      videoLength: string;
      obs1: string;
      obs2: string;
    }) => {
      address: string;
      userChoice: string;
      imagesArray: never[];
      watermark: []
      musicFilesArray: never[];
      text: string;
      intructons: string;
      videoLength: string;
      obs1: string;
      obs2: string;
    }
  >;
}
