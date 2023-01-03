import {
	Pressable,
	StyleSheet,
	Text,
	View,
	Button,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome, { SolidIcons } from "react-native-fontawesome";
import BackArrow from "../components/BackArrow";

function AuthLayout(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<BackArrow marginLeft={true} />
			<ScrollView contentContainerStyle={styles.container}>
				{props.children}
			</ScrollView>
			<View style={styles.navContainer}>
				{props.login ? (
					<Pressable
						style={styles.link}
						onPress={() => {
							navigation.navigate("Login", {});
						}}
					>
						<Text>Login</Text>
					</Pressable>
				) : (
					<Pressable
						style={styles.link}
						onPress={() => {
							navigation.navigate("Registration", {});
						}}
					>
						<Text>Register</Text>
					</Pressable>
				)}
				<TouchableOpacity
					style={styles.button}
					onPress={async () => {
						if (props.readyToAuthenticate) {
							await props.setIsAuthenticated(true);
						}
						navigation.navigate(props.navigate, {});
					}}
				>
					<FontAwesome
						style={{ fontSize: 25 }}
						icon={SolidIcons.arrowRight}
						color='white'
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	navContainer: {
		alignSelf: "stretch",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 14,
		paddingHorizontal: 20,
		borderRadius: 4,
		backgroundColor: "black",
		marginBottom: 10,
		marginRight: 10,
	},
	link: {
		alignSelf: "center",
		marginLeft: 10,
	},
});

export default AuthLayout;
