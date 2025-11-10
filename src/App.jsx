import "./App.css";
import Header from "@/components/Header/Header";
import SideNavigation from "@/components/SideNavigation/SideNavigation";
import Profile from "@/components/Profile/Profile";
import Footer from "@/components/Footer/Footer";
import Feed from "@/components/Feed/Feed";
import Messenger from "@/components/Messenger/Messenger";
import { Route, Routes } from "react-router-dom";

function App(props) {
    return (
        <div className="wrapper">
            <Header />
            <SideNavigation />
            <section id="content">
                <main>
                    <Routes>
                        <Route
                            path="/profile"
                            element={
                                <Profile profile={ props.state.profile } addPost={ props.addPost }
                                         updateNewPostText={ props.updateNewPostText }
                                /> }
                        >

                        </Route>
                        <Route
                            path="/messages/*"
                            element={
                                <Messenger
                                    dialogs={ props.state.messenger.dialogs }
                                    messages={ props.state.messenger.messages }
                                />
                            }
                        ></Route>
                        <Route path="/feed" element={ <Feed /> }></Route>
                    </Routes>
                </main>
            </section>
            <Footer />
        </div>
    )
}

export default App
