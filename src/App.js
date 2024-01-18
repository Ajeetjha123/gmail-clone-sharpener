import Compose from "./Compose";
import EmailList from "./EmailList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmailDetail from "./EmailDetail";
import Auth from "./Auth";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      {isLoggedIn && <Header />}

      <div className="app__body">
        {isLoggedIn && <Sidebar />}

        <Routes>
          {!isLoggedIn && <Route path="/" element={<Auth />} exact />}
          {isLoggedIn && <Route path="/mail" element={<EmailList />} />}
          {isLoggedIn && <Route path="/detail" element={<EmailDetail />} />}
        </Routes>
      </div>
      {isLoggedIn && isMessageOpen && <Compose />}
    </Router>
  );
}

export default App;
