import {
  UnstyledButton,
  Menu,
  Image,
  Box,
  Text,
  Button,
  Divider,
  Input,
} from "@mantine/core";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import useStyles from "./AdminPage.style";
import logo from "../../assets/svg/LOGO.jpg";
import IconChevronDown from "../../assets/icons/ChevronDown";
import ContentJobs from "../components/ContentJobs/ContentJobs";
import { jobLabels } from "../../const/label";

const btns = ["Video", "Revisions", "Reels", "Reels Revision"];
const adminOptions = ["Dashboard", "User Management", "Settings", "Logout"];
const actionBtns = [
  "All",
  "Not Assigned",
  "In Progress",
  "Completed",
  "Approved",
];

const AdminPage = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedBtn, setSelectedBtn] = useState(btns[0]);
  const [selectedAction, setSelectedAction] = useState(actionBtns[1]);
  const [status, setStatus] = useState<string>(actionBtns[1]);
  const { logout } = useContext(AuthContext);
  const { classes } = useStyles();

  const handleSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <Box className={classes.content}>
      <Box className={classes.top}>
        <Image src={logo} alt="LOGO" h={40} w="auto" />
        <Box className={classes.center}>
          <Menu withArrow>
            <Menu.Target>
              <UnstyledButton className={classes.button}>
                {selected ?? "Admin"} <IconChevronDown />
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown className={classes.dropdown}>
              <Text className={classes.label}>Admin</Text>
              {adminOptions.map((option) => (
                <Menu.Item key={option} onClick={() => handleSelect(option)}>
                  {option}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
          {jobLabels.header.map((i, j) =>
            j !== jobLabels.header.length-1 ? (
              <Box key={i+j} >{i}</Box>
            ) : (
              <Button mt="md" onClick={logout}>
               {i}
              </Button>
            )
          )}
          <Box></Box>
        </Box>
        <Box>{jobLabels.administrator}</Box>
      </Box>

      <Box className={classes.header}>
        {btns.map((btn: string) => (
          <Button
            key={btn}
            onClick={() => setSelectedBtn(btn)}
            style={
              selectedBtn === btn
                ? { backgroundColor: "red", color: "#fff" }
                : {}
            }
            className={classes.headerBtn}
          >
            {btn}
          </Button>
        ))}
      </Box>
      <Divider style={{ height: "1px", margin: "0px 20px" }} bg="#d4d4d4ff" />
      <Box className={classes.searchContainer}>
        <Box className={classes.searchBox}>
          <Text className={classes.textBox}>{jobLabels.searchAddresLabel}</Text>
          <Input className={classes.input} />
        </Box>
        <Box className={classes.searchBox} style={{ marginLeft: "20px" }}>
          <Text className={classes.textBox}>{jobLabels.searchIdLabel}</Text>
          <Input className={classes.input} />
        </Box>
      </Box>
      <Box className={classes.actonsBox}>
        {actionBtns.map((action) => (
          <Button
            key={action}
            style={
              selectedAction === action
                ? { backgroundColor: "red", color: "#fff" }
                : {}
            }
            onClick={() => {
              setSelectedAction(action);
              setStatus(action);
            }}
            className={classes.actionBtn}
          >
            {action}
          </Button>
        ))}
      </Box>
      <ContentJobs status={status} />
    </Box>
  );
};

export default AdminPage;
