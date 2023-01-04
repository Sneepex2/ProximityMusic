import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import Map from "../pages/Map";
import Welcome from "../pages/Welcome";
import AuthLayout from "../pages/AuthLayout";
import AuthNav from "../pages/AuthNav";
import Registration from "../pages/Registration";
import FindFriends from "../pages/FindFriends";
import Login from "../pages/Login";
import Explore from "../pages/Explore";
import Profile from "../pages/Profile";

const Stack = createNativeStackNavigator();

function Navigator() {
	const darkTheme = useTheme();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={!isAuthenticated ? "Welcome" : "Map"}
				screenOptions={
					darkTheme == true
						? {
								headerShown: false,
								contentStyle: {
									backgroundColor: "#121212",
								},
						  }
						: {
								headerShown: false,
								contentStyle: {
									backgroundColor: "#FFFDFA",
								},
						  }
				}
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
	);
}

export default Navigator;
