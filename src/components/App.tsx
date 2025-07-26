import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../App.css'
import Homepage from '../pages/MainPage'
import Layout from 'pages/Layout';


const App = () => {

  return (
        <Router>
          <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Homepage/>}/>
          </Route>
          </Routes>
        </Router>
  );
};

export default App
