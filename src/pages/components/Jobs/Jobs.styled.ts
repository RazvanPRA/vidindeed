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
    service: { width: "10%" },
    link: { width: "40%" },
    status: { width: "10%" },
    select: { width: "20%" },
    btnZone: { width: "10%" },
    bodyBox: { display: "flex", marginBottom: "40px", paddingTop: "10px" },
    first: { width: "10%", marginRight:'10px' },
    timeZone: {
      backgroundColor: "#ff0000ff",
      borderRadius: "10px",
      padding: "10px",
    },
    timeZoneText: { textAlign: "center" },
    second: { width: "10%" },
    third: { width: "40%" },
    fourth: { width: "10%" },
    fifth: { width: "20%" },
    sixth: {
      width: "10%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    btnOption: {
      border: "1px #aaaaaaff solid",
      display: "flex",
      fw: 600,
      justifyContent: "center",
      margin: "5px",
      borderRadius: "10px",
      textAlign: "center",
      padding: "5px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "#aaaaaaff",
      },
    },
    assign: { backgroundColor: "#1574f1ff" },
    view: { backgroundColor: "#f08b49ff" },
    complete: { backgroundColor: "#198815ff" },
  };
});

export default useStyles;
