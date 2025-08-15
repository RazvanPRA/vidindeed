import { useContext } from "react";
import InfoPage from "../components/InfoPage/InfoPage"
import { AuthContext } from "../../context/AuthContext";

const Worker = ()=>{
     const { user } = useContext(AuthContext);
    return <InfoPage user={user} />
}

export default Worker