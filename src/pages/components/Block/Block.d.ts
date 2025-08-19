import type { UseFormReturnType } from "@mantine/form";

export interface BlockProps {
  type:
    | "intro"
    | "outro"
    | "watermark"
    | "music"
    | "box layovers"
    | "instructions";
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
