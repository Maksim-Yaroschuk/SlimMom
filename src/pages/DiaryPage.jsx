import { Box } from 'components/Box';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import React from 'react';

export const DiaryPage = () => {
  return (
    <Box paddingTop="180px">
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </Box>
  );
};
