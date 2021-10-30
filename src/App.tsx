import HomeLayout from "./components/HomeLayout";
import MenuBar from "./components/MenuBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import classes from './styles/App.module.css';


function App() {
  return (
    <div>
      <MenuBar />
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <HomeLayout/>
    </div>
  );
}

export default App;
