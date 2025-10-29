import "./App.css";
import Header from "@/components/Header/Header";
import SideNavigation from "@/components/SideNavigation/SideNavigation";
import Profile from "@/components/Profile/Profile";
import Footer from "@/components/Footer/Footer";
import Feed from "@/components/Feed/Feed";
import Messenger from "@/components/Messenger/Messenger";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <SideNavigation />
                <section id="content">
                    <main>
                        <Routes>
                            <Route path="/profile" element={ <Profile /> }></Route>
                            <Route path="/messages" element={ <Messenger /> }></Route>
                            <Route path="/feed" element={ <Feed /> }></Route>
                        </Routes>
                    </main>
                </section>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
