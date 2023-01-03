import { Pressable, StyleSheet, Text, TouchableHighlight } from "react-native";

function HighlightButton(props) {
	return (
		<TouchableHighlight style={styles.button} onPress={props.onPress}>
			<Text style={styles.text}>{props.children}</Text>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	button: {
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 4,
		backgroundColor: "purple",
	},
	text: {
		color: "white",
	},
});

export default HighlightButton;
