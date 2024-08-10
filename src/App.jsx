// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Components/Home';
// import Events from './Components/Events/Events';
// import ContactUs from './Components/ContactUs';
// import Footer from './Footer';
// import Loading from './Components/Loading';
// import Loading1 from './Components/Events/Loading1';
// import Loading2 from './Components/Events/Loading2';
// import Loading4 from './Components/Events/Loading4';
// import Loading5 from './Components/Events/Loading5';
// import Loading6 from './Components/Events/Loading6';
// import Loading7 from './Components/Events/Loading7';
// import Event4 from './Components/Events/Event4/Event4';
// import Event5 from './Components/Events/Event5/Event5';
// import Event6 from './Components/Events/Event6/Event6';
// import Event7 from './Components/Events/Event7/Event7';
// import Event1 from './Components/Events/Event1/Event1';
// import Event2 from './Components/Events/Event2/Event2';
// import Event3 from './Components/Events/Event3/Event3';

// import Loading3 from './Components/Events/Loading3';
// import Loading8 from './Components/Events/Loading8';
// import Event8 from './Components/Events/Event8/Event8';
// import AboutUs from './Components/AboutUs/AboutUs';

// function App() {
//   return (
//     <div className="bg-gray-900 font-good">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/events/event1/loading" element={<Loading1 />} />
//           <Route path="/events/event2/loading" element={<Loading2 />} />
//           <Route path="/events/event3/loading" element={<Loading3 />} />
//           <Route path="/events/event4/loading" element={<Loading4 />} />
//           <Route path="/events/event5/loading" element={<Loading5 />} />
//           <Route path="/events/event6/loading" element={<Loading6 />} />
//           <Route path="/events/event7/loading" element={<Loading7 />} />
//           <Route path="/events/event8/loading" element={<Loading8 />} />
//           <Route path="/events/event1" element={<Event1 />} />
//           <Route path="/events/event2" element={<Event2 />} />
//           <Route path="/events/event3" element={<Event3 />} />
//           <Route path="/events/event4" element={<Event4 />} />
//           <Route path="/events/event5" element={<Event5 />} />
//           <Route path="/events/event6" element={<Event6 />} />
//           <Route path="/events/event7" element={<Event7 />} />
//           <Route path="/events/event8" element={<Event8 />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/loading" element={<Loading />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Change this line
import Home from './Components/Home';
import Events from './Components/Events/Events';
import ContactUs from './Components/ContactUs';
import Footer from './Footer';
import Loading from './Components/Loading';
import Loading1 from './Components/Events/Loading1';
import Loading2 from './Components/Events/Loading2';
import Loading4 from './Components/Events/Loading4';
import Loading5 from './Components/Events/Loading5';
import Loading6 from './Components/Events/Loading6';
import Loading7 from './Components/Events/Loading7';
import Event4 from './Components/Events/Event4/Event4';
import Event5 from './Components/Events/Event5/Event5';
import Event6 from './Components/Events/Event6/Event6';
import Event7 from './Components/Events/Event7/Event7';
import Event1 from './Components/Events/Event1/Event1';
import Event2 from './Components/Events/Event2/Event2';
import Event3 from './Components/Events/Event3/Event3';
import Loading3 from './Components/Events/Loading3';
import Loading8 from './Components/Events/Loading8';
import Event8 from './Components/Events/Event8/Event8';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <div className="bg-gray-900 font-good">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/event1/loading" element={<Loading1 />} />
          <Route path="/events/event2/loading" element={<Loading2 />} />
          <Route path="/events/event3/loading" element={<Loading3 />} />
          <Route path="/events/event4/loading" element={<Loading4 />} />
          <Route path="/events/event5/loading" element={<Loading5 />} />
          <Route path="/events/event6/loading" element={<Loading6 />} />
          <Route path="/events/event7/loading" element={<Loading7 />} />
          <Route path="/events/event8/loading" element={<Loading8 />} />
          <Route path="/events/event1" element={<Event1 />} />
          <Route path="/events/event2" element={<Event2 />} />
          <Route path="/events/event3" element={<Event3 />} />
          <Route path="/events/event4" element={<Event4 />} />
          <Route path="/events/event5" element={<Event5 />} />
          <Route path="/events/event6" element={<Event6 />} />
          <Route path="/events/event7" element={<Event7 />} />
          <Route path="/events/event8" element={<Event8 />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;