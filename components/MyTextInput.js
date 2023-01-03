import { StyleSheet, TextInput } from "react-native";

function MyTextInput(props) {
	return (
		<TextInput
			style={styles.input}
			placeholder={props.placeholder}
			placeholderTextColor='grey'
		></TextInput>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 2,
		minWidth: 150,
		backgroundColor: "lightgrey",
		borderColor: "grey",
		borderRadius: 4,
		padding: 10,
	},
});

export default MyTextInput;
