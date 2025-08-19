import { createStyles } from "@mantine/styles";

const useStyles = createStyles(() => {
  return {
    content: {
      display: "flex",
      flexDirection: "column",
      margin: "0px 20px",
    },
    headerBox: {
      display: "flex",
    },
    date: { width: "10%" },
    service: { width: "15%" },
    link: { width: "50%" },
    status: { width: "10%" },
    select: { width: "20%" },
    btnZone: { width: "10%" },
    bodyBox: { display: "flex", marginBottom: "40px" },
    first: { width: "10%" },
    second: { width: "10%" },
    third: { width: "40%" },
    fourth: { width: "10%" },
    fifth: { width: "20%" },
    sixth: { width: "10%" },
  };
});

export default useStyles;
