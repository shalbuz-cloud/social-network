// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import SideNavigation from "./components/SideNavigation";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className='wrapper'>
            <Header />
            <SideNavigation />
            <Profile />
            <Footer />
        </div>
    );
}

export default App;
