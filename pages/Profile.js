import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackArrow from "../components/BackArrow";
import MyText from "../components/MyText";

function Profile({ navigation, route }) {
	return (
		<View style={styles.container}>
			<BackArrow marginLeft={false} />
			<MyText>Light mode - Dark mode</MyText>
			<MyText big={true}>Username</MyText>
			<MyText>07 ** ** ** 98</MyText>
			<View>
				<MyText>Spotify username</MyText>
				<MyText>Currently not listening to music</MyText>
			</View>
			<MyText>Show only to friends</MyText>
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
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		paddingTop: 100,
	},
	logOut: {
		backgroundColor: "red",
		alignSelf: "flex-start",
		padding: 10,
		borderRadius: 30,
	},
});

export default Profile;
