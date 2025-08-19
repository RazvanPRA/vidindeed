import { createStyles } from "@mantine/styles";

const useStyles = createStyles(() => {
  return {box:{
    display:'flex',
    flexDirection:'column'
  },
    content:{
        display:'flex',
        alignItems:'center',

    },
    input:{
        marginTop:'0px',
        flex:1
    }
  };
});

export default useStyles;
