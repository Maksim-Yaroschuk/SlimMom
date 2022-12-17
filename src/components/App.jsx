import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Box } from './Box';
import { DiaryPage } from 'pages/DiaryPage';
import { CalculatorPage } from 'pages/CalculatorPage';
import { Layout } from './Layout/Layout';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';

export const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="calculator" element={<CalculatorPage />} />
        </Route>
      </Routes>
    </Box>
  );
};
