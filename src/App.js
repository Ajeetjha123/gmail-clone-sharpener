import Compose from "./Compose";
import EmailList from "./EmailList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmailDetail from "./EmailDetail";
function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} exact />
            <Route path="/mail" element={<EmailDetail />} />
          </Routes>
        </div>
        {isMessageOpen && <Compose />}
      </div>
    </Router>
  );
}

export default App;
