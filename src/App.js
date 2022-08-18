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
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
