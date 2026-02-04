import { Routes, Route } from "react-router-dom"; 
import Signup from "./Signup.jsx"; 
import Login from "./Login.jsx";
 import Dashboard from "./Dashboard.jsx"; 
import English from "./english.jsx"; 
import AdminBus from "./adminbus";
import SearchBus from "./searchbus";
import Feedback from "./Feedback";
import ADashboard from "./admindashboard";
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
</Routes> ); }
 export default App;
