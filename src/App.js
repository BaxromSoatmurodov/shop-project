import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Post />
      <Footer />
    </div>
  );
}
export default App;
