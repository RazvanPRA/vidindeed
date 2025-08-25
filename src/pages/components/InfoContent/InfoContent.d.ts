import type { UseFormReturnType } from "@mantine/form";
export interface InfoContentProps {
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

type?:'Worker'
}
