import { Button, Text, View, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthLayout from "./AuthLayout";
import MyTextInput from "../components/MyTextInput";
import MyText from "../components/MyText";
import HighlightButton from "../components/HighlightButton";
import FontAwesome, { BrandIcons } from "react-native-fontawesome";
import { useTheme } from "../components/ThemeContext";

const Stack = createNativeStackNavigator();

function Registration({ navigation, route }) {
	const Name = () => {
		return (
			<AuthLayout login={true} navigate='Birthday'>
				<MyText>So what's your name?</MyText>
				<MyTextInput placeholder='Display Name'></MyTextInput>
			</AuthLayout>
		);
	};

	const Birthday = () => {
		return (
			<AuthLayout login={true} navigate='PhoneNumber'>
				<MyText>When's your birthday?</MyText>
				<MyTextInput placeholder='Birthday'></MyTextInput>
			</AuthLayout>
		);
	};

	const PhoneNumber = () => {
		return (
			<AuthLayout login={true} navigate='Password'>
				<MyText>
					To login and add friends specify your phone number
				</MyText>
				<MyTextInput placeholder='Phone Number'></MyTextInput>
			</AuthLayout>
		);
	};

	const Password = () => {
		return (
			<AuthLayout login={true} navigate='Spotify'>
				<MyText>Create a secure password</MyText>
				<MyTextInput placeholder='Password'></MyTextInput>
			</AuthLayout>
		);
	};

	const Spotify = () => {
		return (
			<AuthLayout
				login={true}
				readyToAuthenticate={true}
				setIsAuthenticated={route.params.setIsAuthenticated}
				navigate='FindFriends'
			>
				<MyText>Finally connect your Spotify!</MyText>
				<View style={{ margin: 12 }}>
					<HighlightButton
						title='Connect Spotify'
						onPress={() => {
							Linking.canOpenURL("https://open.spotify.com/");
						}}
					>
						<Text>Connect Spotify</Text>&nbsp;
						<FontAwesome icon={BrandIcons.spotify} />
					</HighlightButton>
				</View>
			</AuthLayout>
		);
	};

	const darkTheme = useTheme();

	return (
		<Stack.Navigator
			initialRouteName='Name'
			screenOptions={
				darkTheme == true
					? {
							headerShown: false,
							contentStyle: {
								backgroundColor: "black",
							},
					  }
					: {
							headerShown: false,
							contentStyle: {
								backgroundColor: "white",
							},
					  }
			}
		>
			<Stack.Screen name='Name' component={Name}></Stack.Screen>
			<Stack.Screen name='Birthday' component={Birthday}></Stack.Screen>
			<Stack.Screen
				name='PhoneNumber'
				component={PhoneNumber}
			></Stack.Screen>
			<Stack.Screen name='Password' component={Password}></Stack.Screen>
			<Stack.Screen name='Spotify' component={Spotify}></Stack.Screen>
		</Stack.Navigator>
	);
}

export default Registration;
