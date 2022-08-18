import logo from './logo.svg';
import './App.css';
import './app/core/stylesheets/App.scss';
import './app/core/stylesheets/dataTable.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loading from './app/core/utils/loading';
import NotFound from './app/core/utils/notFound';
import DashboardIndexView from './app/features/dashboard/views/indexView';
import Layout from './app/core/utils/layout';
import OrdersIndexView from './app/features/orders/views/indexView';
import CompanyProfileView from './app/features/company/views/profileView';
import EquipmentsIndexView from './app/features/equipments/views/indexView';
import InquiriesIndexView from './app/features/inquiries/views/indexView';
import QuotationsIndexView from './app/features/quotations/views/indexView';
import EmployeesIndexView from './app/features/employees/views/indexView';

function App() {
  return (
    <Router>
      <div className="App">
        <Loading />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Layout />} >
            <Route path="" element={<DashboardIndexView />} />
            <Route path="orders" element={<OrdersIndexView />} />
            <Route path="equipments" element={<EquipmentsIndexView />} />
            <Route path="inquiries" element={<InquiriesIndexView />} />
            <Route path="quotations" element={<QuotationsIndexView />} />
            <Route path="employees" element={<EmployeesIndexView />} />

            <Route path="company" element={<CompanyProfileView />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
