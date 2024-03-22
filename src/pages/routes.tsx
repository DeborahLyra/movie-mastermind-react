
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './HomePage';

const AppRoutes  = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />

    </Routes>
  </BrowserRouter>
);

export default AppRoutes;