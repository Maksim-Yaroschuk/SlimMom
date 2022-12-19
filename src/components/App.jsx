import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Box } from './Box';
import { DiaryPage } from 'pages/DiaryPage';
import { CalculatorPage } from 'pages/CalculatorPage';
import { Layout } from './Layout/Layout';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
=======
// import { christmasTheme } from './Theme/christmasTheme';
import { NotFound } from 'pages/NotFound';


export const App = () => {
  // christmasTheme();
  return (
    <Box>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
      </Suspense>
    </Box>
  );
};
