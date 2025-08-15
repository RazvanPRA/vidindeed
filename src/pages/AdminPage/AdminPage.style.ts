import { createStyles } from "@mantine/styles";

const useStyles = createStyles(() => {
  return {content:{
    marginTop:'16px'
  },
    top: {
      display: "flex",
      justifyContent: "space-between",
      padding: "5px 15px",
      backgroundColor: "whitesmoke",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    center: {
      display: "flex",
      justifyContent: "space-between",
      width: "70%",
      alignItems: "center",
    },
    button: {
      display: "flex",
      alignItems: "center",
      padding: "6px 12px",
      background: "transparent",
      color: "#333",
      fontSize: "16px" as const,
      fontWeight: 500 as const,
      border: "0px",
      cursor: "pointer",
    },
    dropdown: {
      minWidth: "200px",
      borderRadius: "4px",
      padding: "4px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    label: {
      fontSize: "14px",
      fontWeight: 600 as const,
      padding: "8px 12px",
      color: "#555",
      borderBottom: "1px solid #eee",
      marginBottom: "4px",
    },
    item: {
      padding: "8px 12px",
      fontSize: "14px",
      color: "#333",
      borderRadius: "4px",
      cursor: "pointer",
      marginBottom: "2px",
    },
    admin: {
      display: "flex",
      alignItems: "center",
    },
    header: {
      padding: "40px 100px",
    },
    headerBtn: {
      margin: "10px 10px",
      height: "30px",
      width: "200px",
      borderRadius: "5px",
    },
    searchContainer: {
      display: "flex",
      margin: "60px 20px",
    },
    searchBox: {
      display: "flex",
      alignItems: "center",
    },
    textBox: {},
    input: {},
    actonsBox: {
      display: "flex",
      justifyContent: "space-between",
      margin: "60px 20px",
      padding: "20px 20px",
      backgroundColor: "#f5f2f2ff",
      border: "1px solid",
      borderColor: "#e7d2d2ff",
    },
    actionBtn: {
      width:'15%',
         borderRadius: "5px",
         padding:'5px 0px'
    },
  };
});

export default useStyles;
