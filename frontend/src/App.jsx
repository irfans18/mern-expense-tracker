import './App.css'
import {Route, Routes} from "react-router-dom";
import Dashboard from "@pages/Dashboard/Dashboard.jsx";
import CreateOrUpdate from "@pages/CreateOrUpdate/CreateOrUpdate.jsx";
import {ROUTE_NEW_RECORD, ROUTE_UPDATE_RECORD} from "@/Constant/route.constant.js";

function App() {

    return (
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path={ROUTE_NEW_RECORD} element={<CreateOrUpdate/>} />
            <Route path={ROUTE_UPDATE_RECORD} element={<CreateOrUpdate/>} />
        </Routes>
    )
}

export default App
