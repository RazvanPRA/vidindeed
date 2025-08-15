import type { InfoPageProps } from "./InfoPage.d";
import InfoContent from "../InfoContent/InfoContent";

const InfoPage = ({ job }: InfoPageProps) => {
  return <InfoContent job={job} />;
};

export default InfoPage;
