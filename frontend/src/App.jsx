import { Routes, Route } from "react-router-dom"; 
import Signup from "./Signup.jsx"; 
import Login from "./Login.jsx";
 import Dashboard from "./Dashboard.jsx"; 
import English from "./english.jsx"; 
import AdminBus from "./adminbus";
import SearchBus from "./searchbus";
import Feedback from "./Feedback";
import ADashboard from "./admindashboard";
import Abus from "./AboutUs";
import Contact from "./ContactUs";
import Feed from "./Feedback";
import Preview from "./Preview";
import Payment from "./Payment";

function App() {
   
 return ( 
<Routes> 
<Route path="/" element={<Signup />} /> 
<Route path="/login" element={<Login />} /> 
<Route path="/dashboard" element={<Dashboard />} /> 
<Route path="/english" element={<English />} /> 
<Route path="/adminbus" element={<AdminBus />} />
<Route path="/searchbus" element={<SearchBus />} />
 <Route path="/feedback" element={<Feedback />} />
 <Route path="/admindashboard" element={<ADashboard />} />
 <Route path="/AboutUs" element={<Abus />} />
 <Route path="/ContactUs" element={<Contact />} />
 <Route path="/Feedback" element={<Feed />} />
 <Route path="/preview" element={<Preview />} />
 <Route path="/payment" element={<Payment />} />

</Routes> ); }
 export default App;
