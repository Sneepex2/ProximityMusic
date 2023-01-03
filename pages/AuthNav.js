import {
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import MyText from "../components/MyText";

import FontAwesome, { SolidIcons } from "react-native-fontawesome";

function AuthNav({ navigation }) {
	return (
		<View style={styles.container}>
			<MyText regularBold={true}>Do you already have an account?</MyText>
			<View style={styles.nav}>
				<TouchableOpacity
					style={[styles.btn, styles.green]}
					onPress={() => {
						navigation.navigate("Login", {});
					}}
				>
					<FontAwesome icon={SolidIcons.userCheck} />
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.btn, styles.red]}
					onPress={() => {
						navigation.navigate("Registration", {});
					}}
				>
					<FontAwesome icon={SolidIcons.userSlash} />
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
	nav: {
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	btn: {
		padding: 10,
		borderRadius: 4,
		marginHorizontal: 10,
	},
	green: {
		backgroundColor: "lightgreen",
	},
	red: {
		backgroundColor: "pink",
	},
});

export default AuthNav;
