import { StyleSheet, View } from "react-native";
import MapCard from "./MapCard";

function Overlay(props) {
	return (
		<View style={styles.container}>
			<MapCard x={200} y={300} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(128, 0, 128, 0.1)",
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
	},
});

export default Overlay;
