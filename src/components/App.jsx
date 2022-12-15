import { First } from 'pages/First';
import { AppBar } from './AppBar/AppBar';
import { Box } from './Box';

export const App = () => {
  return (
    <Box maxWidth={'1280px'} m={'0 auto'}>
      <AppBar />
      <First />
    </Box>
  );
};
