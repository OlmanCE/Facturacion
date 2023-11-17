import { Route, Routes} from "react-router-dom";
import ResponsiveAppBar from "../pages/navbar/ResponsiveAppBar";
import ProductsManagement from "../pages/products_management/ProductsManagement";
import BillsManagement from "../pages/bills_management/BillsManagement";
import Landing from "../pages/landing/Landing";
import FormProducts from "../pages/products_management/components/FormProducts";
import FormBill from "../pages/bills_management/components/FormBill";

export function AppRouter() {
 
    return (
        <Routes>
          <Route path="/" element={<ResponsiveAppBar/>} >
            <Route index element={<Landing />} />
  
            <Route path="products" element={<ProductsManagement/>} />
            <Route path="products/form/:id" element={<FormProducts/>} />


            <Route path="bills" element={<BillsManagement/>} />
            <Route path="bills/form/:id" element={<FormBill/>} />
  
          </Route>
        </Routes>
    );
  }
export default AppRouter;