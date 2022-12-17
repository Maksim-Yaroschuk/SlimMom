import { Box } from 'components/Box';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};
// display="flex" flexDirection="column" minHeight="100%"
