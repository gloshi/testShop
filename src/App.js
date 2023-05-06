import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <AppRoutes />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
