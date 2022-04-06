import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Login from "./components/login";
import Signup from "./components/signup";
import Subscriptions from "./components/subscriptions";
import SubscriptionDetails from "./components/subscriptionDetails";
import ConfirmScreen from "./components/confirmScreen";

import TokenContext from "./context/TokenContext";

function App() {
    const [userName, setUserName] = useState("");
    const [userToken, setUserToken] = useState("");
    const [userSubscription, setUserSubscription] = useState("");
    const [subID, setSubID] = useState("");  

    return (
        <TokenContext.Provider value={{userToken, setUserToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/subscriptions" element={<Subscriptions setSubID={setSubID}/>} />
                    <Route path="/subscriptions/:IDSubscription" element={<SubscriptionDetails subID={subID}/>} />
                    <Route path="/teste" element={<ConfirmScreen />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));