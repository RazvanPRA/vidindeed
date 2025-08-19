import { createStyles } from "@mantine/styles";

const useStyles = createStyles(() => {
  return {
    block: {
      display:'flex',
      flexDirection:'column',
      flex: 1,
      margin: "10px",
      backgroundColor: "#eeeeeeff",
      padding: "10px 20px",
      border: "1px solid #b9b9b9ff",
      borderRadius: "20px",
      alignItems:'baseline'
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
      fontWeight: 600,
    },
    root:{
       display:'flex',
       backgroundColor:'#eeeeeeff'
    },
    input:{
      padding:'0px !important',
       backgroundColor:'#eeeeeeff !important'
    },
    field:{
       width:'50px',
       height:'30px',
       border:'1px solid',
       borderRadius:'10px'
    }
  };
});

export default useStyles;
