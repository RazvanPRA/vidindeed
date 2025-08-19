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
  };
});

export default useStyles;
