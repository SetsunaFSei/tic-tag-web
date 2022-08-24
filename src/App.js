import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClaimListScreen from "./screens/claim/ClaimListScreen";
import Drawer from "./screens/home/Drawer";
import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import ProductCreateScreen from "./screens/product/ProductCreateScreen";
import ProductDetailScreen from "./screens/product/ProductDetailScreen";
import ProductListScreen from "./screens/product/ProductListScreen";

function App() {
  // const [items, setItems] = useState([]);
  const isLogin = true;// localStorage.getItem("isLogin");
  return (
    <>
      <div className="container">
        <Router>
         
            <div>
              <Drawer />
              <Routes>
                <Route path="/" exact element={<HomeScreen />} />
                <Route path="/home" exact element={<HomeScreen />} />
                <Route path="/login" exact element={<LoginScreen />} />
                 <Route path="/claim" element={<ClaimListScreen />} />
                <Route path="/product" element={<ProductListScreen />} /> 
                <Route path="/product-create" element={<ProductCreateScreen />} /> 
                <Route path="/product-detail/:id" element={<ProductDetailScreen />} /> 
                
              </Routes>
            </div>
         
          
           
       
        </Router>
      </div>
    </>
    // :<>
    // <div className="container">
    //     <Router>
    //       <Routes>
    //         <Route path="/" exact element={<HomeScreen />} />
    //         <Route path="/claim" element={<ClaimListScreen />} />
    //         <Route path="/product" element={<ProductListScreen />} />
    //       </Routes>

    //     </Router>
    //   </div>
    // </>
  );
}

export default App;
