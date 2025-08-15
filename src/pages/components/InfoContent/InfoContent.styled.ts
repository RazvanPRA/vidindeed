import { createStyles } from "@mantine/styles";

const useStyles = createStyles(() => {
  return {
    content: {
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      marginTop: "15px",
    },
    row: { display: "flex" },
    block: {
      flex: 1,
      margin: "10px",
      backgroundColor: "#eeeeeeff",
      padding: "10px 20px",
      border: "1px solid #b9b9b9ff",
      borderRadius: "20px",
    },
    title: {
      fontWeight: 900,
      fontSize: "24px",
    },
    subTitle: {
      fontWeight: 600,
      fontSize: "18px",
    },
    alert: {
      marginLeft: "20px",
      color: "#ff0000ff",
      fontStyle: "italic",
      fontWeight:600
    },
  };
});

export default useStyles;
