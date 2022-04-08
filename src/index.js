import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Login from "./components/login";
import Signup from "./components/signup";
import Subscriptions from "./components/subscriptions";
import SubscriptionDetails from "./components/subscriptionDetails";
import ConfirmScreen from "./components/confirmScreen";
import Home from "./components/home";

import TokenContext from "./context/TokenContext";
import UserContext from './context/UserContext';

function App() {
    const [userData, setUserData] = useState({});
    const [userToken, setUserToken] = useState("");
    const [subID, setSubID] = useState("");  

    return (
        <TokenContext.Provider value={{userToken, setUserToken}}>
            {/* <UserContext.Provider value={{userData, setUserData}}> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login setUserData={setUserData}/>} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/subscriptions" element={<Subscriptions setSubID={setSubID}/>} />
                    <Route path="/subscriptions/:IDSubscription" element={<SubscriptionDetails subID={subID}/>} />
                    <Route path="/home" element={<Home userData={userData}/>} />
                </Routes>
            </BrowserRouter>
           {/*  </UserContext.Provider> */}
        </TokenContext.Provider>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));