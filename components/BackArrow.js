import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome, { SolidIcons } from "react-native-fontawesome";
import { useTheme } from "./ThemeContext";

function BackArrow(props) {
	const darkTheme = useTheme();
	const navigation = useNavigation();

	const styles = StyleSheet.create({
		container: {
			position: "relative",
			top: 0,
			left: 0,
			alignSelf: "flex-start",
			marginTop: props.relative ? 50 : 50,
			marginBottom: 20,
			width: 50,
			height: 50,
			alignItems: "center",
			justifyContent: "center",
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
	});

	return (
		<TouchableOpacity
			style={[
				styles.container,
				styles.elevation,
				props.marginLeft ? { marginLeft: 20 } : { marginLeft: 5 },
			]}
			onPress={() => navigation.goBack()}
		>
			<FontAwesome
				style={{ fontSize: 25 }}
				icon={SolidIcons.arrowLeft}
				color={darkTheme ? "white" : "black"}
			/>
		</TouchableOpacity>
	);
}

export default BackArrow;
