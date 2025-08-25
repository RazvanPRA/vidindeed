import { createStyles } from "@mantine/styles";

const useStyles = createStyles(() => {
  return {
    card: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      height: "100%",
      flexDirection: "column",
      marginTop: "50px",
    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "50px",
      border: "1px solid",
      borderColor: "#000",
      borderRadius: "10px",
      padding: "10px",
      height: "280px",
      width: "220px",
      backgroundColor: "whitesmoke",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    root: {
      width: "90%",
    },
    input: {
      width: "90%",
      borderRadius: "5px",
      padding: "5px 10px",
      borderColor: "#B3B3B3",
    },

    inputLabel: {
      marginBottom: "5px",
    },

    signBtn: {
      backgroundColor: "#000",
      color: "#FFF",
      width: "76px",
      height: "40px",
      borderRadius: "10px",
      cursor: "pointer",
      alignSelf: "center",
      marginTop: "10px",
    },
    fwBtn: {
      alignSelf: "center",
      cursor: "pointer",
      textDecoration: "underline",
    },
  };
});
export default useStyles;
