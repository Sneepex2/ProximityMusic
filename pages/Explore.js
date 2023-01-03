import { StyleSheet, View } from "react-native";
import BackArrow from "../components/BackArrow";

function Explore() {
	return (
		<View style={styles.container}>
			<BackArrow marginLeft={false} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 100,
		marginLeft: 10,
	},
});

export default Explore;
