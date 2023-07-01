import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomPage from '../src/Components/WelcomPage';
import SetAtt from './Components/SetAtt';
import ChatScreen from './Components/ChatScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<WelcomPage/>} />
            <Route path="/set_att" element = {<SetAtt/>} />
            <Route path="/chat" element = {<ChatScreen/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
