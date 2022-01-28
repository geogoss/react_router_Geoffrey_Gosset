import Home from './Components/Home';
import {Routes, Route} from 'react-router-dom';
import Profile from "./Components/Profile";
import NotFound from "./Components/NotFound";
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import Development from './Components/Development';
import CyberSecurite from './Components/CyberSecurite';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/service" element={<Services />}>
          <Route path="/service/development" element={<Development />} />
          <Route path="/service/cybersecurite" element={<CyberSecurite />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
