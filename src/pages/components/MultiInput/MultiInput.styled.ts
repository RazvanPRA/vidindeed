import { createStyles } from "@mantine/styles";

const useStyles = createStyles(() => {
  return {
    box: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin:'5px 0px'
    },
    input: {
      marginTop: "0px",
      width:'100%'
    },
    groupBtn:{
      display:'flex',
      justifyContent:'space-evenly',
      marginLeft:'5px'
    }
  };
});

export default useStyles;
