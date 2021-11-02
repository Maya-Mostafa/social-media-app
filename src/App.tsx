import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


const App = () => {
  return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<Redirect to='/home'></Redirect>
				</Route>
				<Route path='/home'>
					<Home />
				</Route>
				<Route path='/sign-in'>
					<SignIn />
				</Route>
				<Route path='/sign-up'>
					<SignUp />
				</Route>
			</Switch>
		</Layout>
  );
}

export default App;
