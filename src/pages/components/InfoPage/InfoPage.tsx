import InfoContent from "../InfoContent/InfoContent";
import { useForm } from "@mantine/form";

const InfoPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useForm<any>({
    mode: "uncontrolled",
    initialValues: {
      address: "Schönhauser Allee 175, 10119 Berlin, Germany",
      userChoice: "User chose not have an outro",
      imagesArray: [],
      watermark: [],
      musicFilesArray: [],
      text: "User chose not have text layovers",
      intructons:
        "Kindly start with the aerial view. This is a newly build show home. Please begin with an aerial view. If possible, try to cut the clips in time ith the rhythim of the song.",
      videoLength: "09:00:00",
      obs1: "Shot in order. But the drone clips come last because they ere shot last. They don't necessarlly have to come at the end.",
      obs2: "User selected EXCLUDE SOME VIDEO CLIPS, you are allowing the editor to not include video clips that seem redundant to get your video don to a certain length without making it look reshed. They will only remove video clips they feed that are duplicate rooms or views of the same area.",
    },
  });
  const type="Worker" 

  return <InfoContent form={form} type={type} />;
};

export default InfoPage;
