import { Routes, Route } from "react-router-dom"
import FetchData from "./FetchData/FetchData";
import FetchDataTableRendering from "./FetchData/FetchDataTableRendering";
import PokemonDataFetch from "./FetchData/PokemonDataFetch";
import DateTime from "./DateTime/DateTime.jsx";
import ReactDigitalClock from "./DateTime/ReactDigitalClock.jsx";
import Cards from "./Cards/Cards.jsx";
import ImageReader from "./Cards/ImageReader.jsx";
import Hooks from "./Hooks/Hooks.jsx";
import ToDoList from "./ToDoList/ToDoList.jsx";
import ShowHideButton from "./ToDoList/ShowHideButton.jsx";
import IncrementDecrement from "./ToDoList/IncrementDecrement.jsx";
import CopyPaste from "./ToDoList/CopyPaste.jsx";
import WebPage from "./BootstrapSite/WebPage.jsx";
import StickyNotes from "./BootstrapSite/StickyNotes.jsx";
import BootstrapModal from "./BootstrapSite/BootstrapModal.jsx";
import UseContextFile from "./Hooks/UseContextFile.jsx";
import IncDecUseEffect from "./Common Data/IncDecUseEffect.jsx";
import Menu from "./Navbar/Menu.jsx";
import Blog from "./Navbar/Blog.jsx";
import AboutUs from "./Navbar/AboutUs.jsx";
import Home from "./Navbar/Home.jsx";
import ContactUs from "./Navbar/ContactUs.jsx";
import Services from "./Navbar/Services.jsx";
import Card from "./Navbar/Card.jsx";
import Error from "./Navbar/Error.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import Website from "./Website/Website.jsx";
function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FetchData" element={<FetchData />} />
        <Route path="/dateTime" element={<DateTime />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/Hooks" element={<Hooks />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/ShowHideButton" element={<ShowHideButton />} />
        <Route path="/CopyPaste" element={<CopyPaste />} />
        <Route path="/IncrementDecrement" element={<IncrementDecrement />} />
        <Route path="/ReactDigitalClock" element={<ReactDigitalClock />} />
        <Route path="/WebPage" element={<WebPage />} />
        <Route path="/StickyNotes" element={<StickyNotes />} />
        <Route path="/BootstrapModal" element={<BootstrapModal />} />
        <Route path="/UseContextFile" element={<UseContextFile />} />
        <Route path="/IncDecUseEffect" element={<IncDecUseEffect />} />
        <Route path="/FetchDataTableRendering" element={<FetchDataTableRendering />} />
        <Route path="/PokemonDataFetch" element={<PokemonDataFetch />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ImageReader" element={<ImageReader />} />
        <Route path="/Blog/:name" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/SearchBar" element={<SearchBar />} />
        <Route path="/Website" element={<Website />} />
        <Route path="*" element={<Error />} />

      </Routes>

    </>
  );
}

export default App;
