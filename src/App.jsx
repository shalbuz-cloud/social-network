import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "@/components/Header/Header";
import SideNavigation from "@/components/SideNavigation/SideNavigation";
import ProfileContainer from "@/components/Profile/ProfileContainer";
import Footer from "@/components/Footer/Footer";
import Feed from "@/components/Feed/Feed";
import MessengerContainer from "@/components/Messenger/MessengerContainer.jsx";
import UsersContainer from "@/components/Users/UsersContainer.jsx";
import LoginPage from "@/components/Login/Login";

function App() {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <SideNavigation />
            <section id="content">
                <main>
                    <Routes>
                        {/* :userId? - опциональный параметр */}
                        <Route path="/profile/:userId?" element={ <ProfileContainer /> } />
                        <Route path="/messages/*" element={ <MessengerContainer /> } />
                        <Route path="/feed" element={ <Feed /> } />
                        <Route path="/users" element={ <UsersContainer /> } />
                        <Route path="login" element={ <LoginPage /> } />
                    </Routes>
                </main>
            </section>
            <Footer />
        </div>
    )
}

export default App;
