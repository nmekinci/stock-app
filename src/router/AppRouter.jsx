import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "../pages/Login"
import Register from "../pages/Register"
import PrivateRouter from "./PrivateRouter"
import Dashboard from "../pages/Dashboard"
import Home from "../pages/Home"
import EnhancedTable from "../pages/Purchases"
import Sales from "../pages/Sales"
import Products from "../pages/Products"
import Firms from "../pages/Firms"
import Brands from "../pages/Brands"
import Purchases from "../pages/Purchases"
import NoAuthPage from "../components/NoAuthPage"

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="purchases" element={<Purchases />} />
            {/* <Route path="purchases" element={<EnhancedTable />} /> */}
            <Route path="sales" element={<Sales />} />
            <Route path="products" element={<Products />} />
            <Route path="firms" element={<Firms />} />
            <Route path="brands" element={<Brands />} />
            <Route path="no" element={<NoAuthPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter