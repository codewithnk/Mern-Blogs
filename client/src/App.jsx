
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { RouteIndex } from "./helpers/RouteName";
import Index from "./Pages/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout/>}>
        <Route index element={<Index/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
