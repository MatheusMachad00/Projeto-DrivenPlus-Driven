import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Login from "./components/login";
import Signup from "./components/signup";
import Subscriptions from "./components/subscriptions";

import TokenContext from "./context/TokenContext";

function App() {
    const [userName, setUserName] = useState("");
    const [userToken, setUserToken] = useState("");
    const [userSubscription, setUserSubscription] = useState("");

    return (
        <TokenContext.Provider value={{userToken, setUserToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));