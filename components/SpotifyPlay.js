import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome, { SolidIcons } from "react-native-fontawesome";
import MyText from "./MyText";
import { useTheme } from "./ThemeContext";

function SpotifyPlay(props) {
	const darkTheme = useTheme();

	const styles = StyleSheet.create({
		circleWrapper: {
			position: "absolute",
			width: 120,
			height: 120,
			borderRadius: 60,
			backgroundColor: darkTheme ? "#696969" : "white",
			shadowColor: "black",
			shadowOffset: { width: -2, height: 4 },
			shadowOpacity: 0.2,
			shadowRadius: 3,
			alignSelf: "center",
			justifyContent: "center",
			alignItems: "center",
			bottom: 200,
		},
		container: {
			position: "absolute",
			width: 100,
			height: 100,
			borderRadius: 50,
			backgroundColor: darkTheme ? "#2F4F4F" : "lightblue",
			justifyContent: "center",
			alignItems: "center",
		},
		elevation: {
			elevation: 15,
			shadowColor: "black",
		},
	});

	return (
		<View style={[styles.circleWrapper, styles.elevation]}>
			<TouchableOpacity style={[styles.container, styles.elevation]}>
				<FontAwesome
					style={{ fontSize: 40 }}
					color={darkTheme ? "white" : "black"}
					icon={SolidIcons.play}
				/>
			</TouchableOpacity>
		</View>
	);
}

//<MyText>Play {props.name}</MyText>

export default SpotifyPlay;
