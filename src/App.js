import NavBar from "./Components/Navbar/NavBar";
import Slider from "./Components/Slider/Slider";
import "bootstrap/dist/css/bootstrap.min.css";
//import Products from "./Components/Products/Products";
import Table from "./Components/Table/Table";
import Form from "./Components/Form/Form";
import Map from "./Components/Map/Map";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <Table />
      <Form />
      <Map />
      <Footer />
    </>
  );
}

export default App;
