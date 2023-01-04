import {
	Button,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
	Switch,
} from "react-native";
import BackArrow from "../components/BackArrow";
import MyText from "../components/MyText";
import { useContext, useState } from "react";
import { useTheme, useThemeUpdate } from "../components/ThemeContext";

function Profile({ navigation, route }) {
	const darkTheme = useTheme();
	const toggleTheme = useThemeUpdate();
	const [isEnabled, setIsEnable] = useState();

	const styles = StyleSheet.create({
		container: {
			marginHorizontal: 10,
			padding: 15,
			backgroundColor: darkTheme ? "#1D1D1D" : "white",
			borderRadius: 10,
			shadowColor: "black",
			shadowOffset: { width: -2, height: 4 },
			shadowOpacity: 0.2,
			shadowRadius: 3,
		},
		elevation: {
			elevation: 15,
			shadowColor: "black",
		},
		profileImage: {
			width: 50,
		},
		inline: {
			flexDirection: "row",
			alignItems: "center",
		},
		logOut: {
			backgroundColor: "red",
			alignSelf: "flex-start",
			padding: 10,
			borderRadius: 30,
			marginTop: 5,
		},
	});

	return (
		<View>
			<BackArrow relative={true} marginLeft={true} />
			<View style={[styles.elevation, styles.container]}>
				<View>
					<View style={styles.inline}>
						<Image
							style={styles.profileImage}
							source={require("../assets/favicon.png")}
						/>
						<MyText big={true}>&nbsp;Username</MyText>
					</View>
					<MyText fontSize={12} color='grey'>
						{"\n"}Theme
					</MyText>
					<View style={styles.inline}>
						<MyText>Light mode&nbsp;</MyText>
						<Switch
							style={{
								height: 20,
							}}
							trackColor={{ true: "darkblue", false: "#81b0ff" }}
							thumbColor={darkTheme ? "lightgrey" : "#f5dd4b"}
							ios_backgroundColor='#3e3e3e'
							onValueChange={toggleTheme}
							value={darkTheme}
						/>
						<MyText>&nbsp;Dark mode</MyText>
					</View>
					<MyText fontSize={12} color='grey'>
						{"\n"}Phone Number
					</MyText>
					<MyText>07 ** ** ** 98</MyText>
					<MyText fontSize={12} color='grey'>
						{"\n"}Spotify Link
					</MyText>

					<View>
						<MyText>Spotify username</MyText>
						<MyText>Currently not listening to music</MyText>
					</View>
					<MyText fontSize={12} color='grey'>
						{"\n"}Privacy Settings
					</MyText>
					<View style={styles.inline}>
						<MyText>Show only to friends&nbsp;</MyText>
						<Switch
							style={{
								height: 20,
							}}
							trackColor={{ false: "#767577", true: "green" }}
							thumbColor={isEnabled ? "lightgreen" : "#f4f3f4"}
							ios_backgroundColor='#3e3e3e'
							onValueChange={() => setIsEnable(!isEnabled)}
							value={isEnabled}
						/>
					</View>
					<MyText fontSize={12} color='grey'>
						{"\n"}Other
					</MyText>

					<TouchableOpacity
						style={styles.logOut}
						onPress={() => {
							route.params.setIsAuthenticated(false);
							navigation.navigate("Login");
						}}
					>
						<MyText color='white'>Log Out</MyText>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Profile;
