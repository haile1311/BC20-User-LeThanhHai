import "./App.css";
// import Baitap1 from "./baitap1";
// import Baitap2 from "./baitap2";
import RenderingElements from "./rendering-elements";
import HandlingEvent from "./handling-events";
import State from "./state";
import ChangeColorCar from "./changeColorCar";
import ListKeys from "./list-keys";
import Example from "./list-keys/example";
import Communication from "./communication";
import LiftingStateUpCart from "./shoping-cart";
import UserManagement from "./user-management";


function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      <RenderingElements />
      <hr />
      <HandlingEvent /> 
      <hr />
      <State />
      <hr />
      <ChangeColorCar />
      <hr />
      <ListKeys />
      <hr />
      <Example />
      <hr />
      <Communication />
      <hr />
      <LiftingStateUpCart />
      <hr />
      <UserManagement />
    </div>
  );
}

export default App;
