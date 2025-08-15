import  { useContext } from 'react';
import { Container, Title, Button } from '@mantine/core';
import { AuthContext } from '../context/AuthContext';

 const CustomerPage  = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <Container my="xl">
      <Title>Admin Dashboard</Title>
      <p>Welcome, {user?.email}</p>
      <Button mt="md" onClick={logout}>Logout</Button>
    </Container>
  );
};

export default CustomerPage