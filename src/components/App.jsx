import { First } from 'pages/First';
import { AppBar } from './AppBar/AppBar';
import { Box } from './Box';
import { DiaryAddProductForm } from './DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from './DiaryDateCalendar/DiaryDateCalendar';
import { DiaryProductsList } from './DiaryProductsList/DiaryProductsList';

export const App = () => {
  return (
    <Box maxWidth={'1280px'} m={'0 auto'}>
      <AppBar />
      <First />
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </Box>
  );
};
