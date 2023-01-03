import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome, { SolidIcons } from "react-native-fontawesome";

function BackArrow(props) {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={[
				styles.container,
				props.marginLeft ? { marginLeft: 20 } : { marginLeft: 5 },
			]}
			onPress={() => navigation.goBack()}
		>
			<FontAwesome
				style={{ fontSize: 25 }}
				icon={SolidIcons.arrowLeft}
				color='black'
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		marginTop: 50,
		marginBottom: 20,
	},
});

export default BackArrow;
