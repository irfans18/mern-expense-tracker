import './App.css'
import {Route, Routes} from "react-router-dom";
import Dashboard from "@pages/Dashboard/Dashboard.jsx";
import CreateOrUpdate from "@pages/CreateOrUpdate/CreateOrUpdate.jsx";

function App() {

    return (
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/new' element={<CreateOrUpdate/>} />
            <Route path='/:id/edit' element={<CreateOrUpdate/>} />
        </Routes>
    )
}

export default App
