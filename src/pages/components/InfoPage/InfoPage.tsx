import type { InfoPageProps } from "./InfoPage.d";
import InfoContent from "../InfoContent/InfoContent";

const InfoPage = ({ user }: InfoPageProps) => {
  return <InfoContent job={user} />;
};

export default InfoPage;
