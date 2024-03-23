import MainPage from "./pages/mainpage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
function App() {
    const objectAbout = {
        title: "Alik",
        descr: "text text text"
    }


    return (
        <div>
            <MainPage name='Alik'/>
            <AboutPage object={objectAbout}/>
        </div>
    );
}
export default App;
