import React, { useState, useContext } from "react";
import { TextInput, PasswordInput, Button, Box, Image } from "@mantine/core";
import { AuthContext } from "../../context/AuthContext";
import useStyles from "./LoginPage.style";
import logo from "../../assets/svg/LOGO.jpg";
import Eye from "../../assets/icons/Eye";
import EyeOff from "../../assets/icons/EyeOff";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { classes } = useStyles();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };
  const [see, setSee] = useState(false);

  return (
    <Box className={classes.card}>
      <Image src={logo} alt="LOGO" width={200} />
      <form onSubmit={handleSubmit}>
        <Box className={classes.box}>
          <TextInput
            label="Email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            classNames={{
              root: classes.root,
              label: classes.inputLabel,
              input: classes.input,
            }}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            visible={see}
            onVisibilityChange={() => setSee((v) => !v)}
            classNames={{
              root: classes.root,
              label: classes.inputLabel,
              input: classes.input,
            }}
            rightSection={
              see ? <Eye onClick={setSee} /> : <EyeOff onClick={setSee} />
            }
          />
          <Button className={classes.signBtn} fullWidth mt="xl" type="submit">
            Sign in
          </Button>
          <Box className={classes.fwBtn}>Forgot password?</Box>
        </Box>
      </form>
    </Box>
  );
};
