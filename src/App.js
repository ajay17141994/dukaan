import logo from './logo.svg';
import './App.css';
import  StickyPopover  from "./atomicComponent/stickyPopover/StickyPopover";
import Header from "./atomicComponent/header/header";
import Card from "./atomicComponent/card/card";
import Whydukaan from "./atomicComponent/whydukaan/whydukaan";
import Store from "./atomicComponent/store/store";
import Footertab from "./atomicComponent/footer/footer";
import Productcarousal from "./atomicComponent/productCarousal/productCarousal"
function App() {
  return (
    <div className="App">
      <StickyPopover/>
      <Header></Header>
      <Productcarousal/>
      <Card></Card>
      <Whydukaan></Whydukaan>
      <Store/>
      <Footertab/>
    </div>
  );
}

export default App;
