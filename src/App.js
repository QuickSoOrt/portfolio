import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SalaryProcessingPage from "./pages/works/SalaryProcessingPage";
import FixedAssetManagementPage from "./pages/works/FixedAssetManagementPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/works/salary-processing-app" element={<SalaryProcessingPage />}></Route>
        <Route path="/works/fixed-asset-management-app" element={<FixedAssetManagementPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
