import Header from "@/components/Header/Header";
import SideNavigation from "@/components/SideNavigation/SideNavigation";
import Profile from "@/components/Profile/Profile";
import Footer from "@/components/Footer/Footer";
// import Feed from "@/components/Feed/Feed";
import "./App.css";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <SideNavigation/>
            <section id="content">
                <main>
                    <Profile/>
                    {/*<Feed />*/}
                </main>
            </section>
            <Footer />
        </div>
    )
}

export default App
