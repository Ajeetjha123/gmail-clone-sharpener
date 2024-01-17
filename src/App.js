import Compose from "./Compose";
import EmailList from "./EmailList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <EmailList />
      </div>
      {isMessageOpen && <Compose />}
    </div>
  );
}

export default App;
