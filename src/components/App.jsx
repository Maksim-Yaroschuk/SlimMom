import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Header } from './Header/Header';
import { Box } from './Box';
import { DiaryPage } from 'pages/DiaryPage';
import { CalculatorPage } from 'pages/CalculatorPage';

export const App = () => {
  return (
    <Box maxWidth={'1280px'} m={'0 auto'}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </Box>
  );
};
