import './App.css'
import {Route, Routes} from "react-router-dom";
import Dashboard from "@pages/Dashboard/Dashboard.jsx";

function App() {

    return (
        <Routes>
            <Route path='/' element={<Dashboard/>} />
        </Routes>
    )
    Ï
}

export default App
