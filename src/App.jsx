import "./App.css";
import Header from "@/components/Header/Header";
import SideNavigation from "@/components/SideNavigation/SideNavigation";
import Profile from "@/components/Profile/Profile";
import Footer from "@/components/Footer/Footer";
import Feed from "@/components/Feed/Feed";
import { Route, Routes } from "react-router-dom";
import MessengerContainer from "@/components/Messenger/MessengerContainer.jsx";

function App(props) {
    return (
        <div className="wrapper">
            <Header />
            <SideNavigation />
            <section id="content">
                <main>
                    <Routes>
                        <Route path="/profile" element={ <Profile /> } />
                        <Route path="/messages/*" element={ <MessengerContainer /> } />
                        <Route path="/feed" element={ <Feed /> } />
                        <Route path="/users" element={<div>users</div>} />
                    </Routes>
                </main>
            </section>
            <Footer />
        </div>
    )
}

export default App
