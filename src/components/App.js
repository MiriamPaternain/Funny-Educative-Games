import "../styles/App.scss";

//import main from "../images/main.jpg";
import LandingPage from "./LandingPage";
import MainPage from "./MainPage";
import Letters from "./Letters";

import Memory from "./Memory";
import NotFoundPage from "./NotFoundPage";
import { Route, Routes } from "react-router-dom";


function App() {
  return ( 

  <>
  <Routes>
    <Route path='/' element={<LandingPage />} />
     <Route path='/MainPage' element={<MainPage />} />
     <Route path='/Letters' element={<Letters />} />
     <Route path='/Memory' element={<Memory />} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
  
   
    <footer>
      <p></p>
    </footer>
</>
)
}

export default App;
