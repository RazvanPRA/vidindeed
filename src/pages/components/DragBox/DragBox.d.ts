import type { UseFormReturnType } from "@mantine/form";

export interface DragBoxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialFiles: any[];
  form: UseFormReturnType<
    {
      address: string;
      userChoice: string;
      imagesArray: never[];
      watermark: [];
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
      watermark: [];
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
      watermark: [];
      musicFilesArray: never[];
      text: string;
      intructons: string;
      videoLength: string;
      obs1: string;
      obs2: string;
    }
  >;
  type:string
}
