import {useState} from 'react'
import NavBar from "./components/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import {AuthContextProvider} from "./context/AuthContext.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Account from "./pages/Account.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <AuthContextProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/account" element={<ProtectedRoute> <Account/> </ProtectedRoute> }/>
                </Routes>
            </AuthContextProvider>
        </>
    )
}

export default App
