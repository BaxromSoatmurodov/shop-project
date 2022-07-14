import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./Context";

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <ContextProvider>
        <Post />
      </ContextProvider>
      <Footer />
    </div>
  );
}
export default App;
