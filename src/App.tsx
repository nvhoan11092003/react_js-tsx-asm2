import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayOut from "./components/layout/UserLayOut";
import AdminLayout from "./components/layout/AdminLayout";
import HomePage from "./components/page/HomePage";
import Signup from "./components/page/Signup";
import Signin from "./components/page/Signin";
import Product from "./components/page/Product";
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
        </Route>
        {/* admin */}
        <Route path="/admin" element={<AdminLayout></AdminLayout>}>

        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
