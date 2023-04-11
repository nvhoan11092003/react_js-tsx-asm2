import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayOut from "./components/layout/UserLayOut";
import AdminLayout from "./components/layout/AdminLayout";
import HomePage from "./components/page/HomePage";
import Signup from "./components/page/Signup";
import Signin from "./components/page/Signin";
import Product from "./components/page/Product";
import Dashboard from "./components/page/dashboard";
import ProductUpdate from "./components/page/product-update";
import ProductCreate from "./components/page/product-create";
import ProductDelete from "./components/page/Product-delete";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* page signin , signup */}
        <Route path="/signin" element={<Signin></Signin>} ></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        {/* page user */}
        <Route path="/" element={<UserLayOut />}>
          <Route index element={<HomePage></HomePage>} ></Route>
          <Route path="product/:id" element={<Product></Product>} ></Route>
          <Route path="logout" element={<Product></Product>} ></Route>

        </Route>
        {/* admin */}
        <Route path="/admin" element={<AdminLayout></AdminLayout>}>
          <Route index element={<Dashboard></Dashboard>} ></Route>
          <Route path="/admin/product/:id" element={<ProductUpdate></ProductUpdate>}></Route>
          <Route path="/admin/product/add" element={<ProductCreate></ProductCreate>}></Route>
          <Route path="/admin/product/delete/:id" element={<ProductDelete></ProductDelete>}></Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
