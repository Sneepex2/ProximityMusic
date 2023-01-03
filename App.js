import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Map from "./pages/Map";
import Welcome from "./pages/Welcome";
import AuthLayout from "./pages/AuthLayout";
import AuthNav from "./pages/AuthNav";
import Registration from "./pages/Registration";
import FindFriends from "./pages/FindFriends";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

const Stack = createNativeStackNavigator();

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [fontsLoaded, setFontsLoaded] = useState(false);

	async function loadFonts() {
		await Font.loadAsync({
			"Aeonik-Bold": require("./assets/fonts/Aeonik-Bold.otf"),
			"Aeonik-Regular": require("./assets/fonts/Aeonik-Regular.otf"),
			"fa-solid-900": require("./assets/icons/fa-solid-900.ttf"),
			"fa-solid-400": require("./assets/icons/fa-regular-400.ttf"),
			"fa-brands-400": require("./assets/icons/fa-brands-400.ttf"),
		});
		setFontsLoaded(true);
	}

	useEffect(() => {
		loadFonts();
	}, []);

	return fontsLoaded ? (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={!isAuthenticated ? "Welcome" : "Map"}
				screenOptions={{ headerShown: false }}
			>
				{!isAuthenticated ? (
					<>
						<Stack.Screen
							name='Login'
							component={Login}
							initialParams={{
								setIsAuthenticated: setIsAuthenticated,
							}}
						></Stack.Screen>
						<Stack.Screen
							name='Welcome'
							component={Welcome}
						></Stack.Screen>
						<Stack.Screen
							name='AuthLayout'
							component={AuthLayout}
						></Stack.Screen>
						<Stack.Screen
							name='AuthNav'
							component={AuthNav}
						></Stack.Screen>
						<Stack.Screen
							name='Registration'
							component={Registration}
							initialParams={{
								setIsAuthenticated: setIsAuthenticated,
							}}
						></Stack.Screen>
					</>
				) : (
					<>
						<Stack.Screen
							name='FindFriends'
							component={FindFriends}
						></Stack.Screen>
						<Stack.Screen name='Map' component={Map}></Stack.Screen>
						<Stack.Screen
							name='Explore'
							component={Explore}
						></Stack.Screen>
						<Stack.Screen
							name='Profile'
							component={Profile}
							initialParams={{
								setIsAuthenticated: setIsAuthenticated,
							}}
						></Stack.Screen>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	) : null;
}

export default App;
