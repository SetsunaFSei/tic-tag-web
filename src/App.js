import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClaimListScreen from "./screens/claim/ClaimListScreen";
import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import ProductCreateScreen from "./screens/product/ProductCreateScreen";
import ProductDetailScreen from "./screens/product/ProductDetailScreen";
import ProductListScreen from "./screens/product/ProductListScreen";

function App() {
  // const [items, setItems] = useState([]);
  const isLogin = true; // localStorage.getItem("isLogin");
  return (
    <>
      <div className="w-full">
        <Router>
          <div>
            <Routes>
              <Route path="/" exact element={<LoginScreen />} />
              <Route path="home" exact element={<HomeScreen />}>
                <Route path="product/product-create" element={<ProductCreateScreen />} />                
                <Route path="product/product-detail/:id" element={<ProductDetailScreen />} />                
                <Route path="claim" element={<ClaimListScreen />} />                
                <Route path="product" element={<ProductListScreen />}>
                  {/* <Route
                    path="product-create"
                    element={<ProductCreateScreen />}
                  />
                  <Route
                    path="product-detail/:id"
                    element={<ProductDetailScreen />}
                  /> */}
                </Route>
              </Route>
              <Route path="/login" exact element={<LoginScreen />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
     
  );
}

export default App;
