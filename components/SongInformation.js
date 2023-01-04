import { Image, StyleSheet, View } from "react-native";
import MyText from "./MyText";

function SongInformation() {
	const styles = StyleSheet.create({
		container: {
			backgroundColor: "red",
			padding: 10,
		},
		elevation: {
			elevation: 15,
			shadowColor: "black",
		},
		albumCover: {
			borderRadius: 4,
			width: 60,
			height: 60,
		},
		inline: {
			flexDirection: "row",
			alignItems: "center",
		},
		info: {
			flexDirection: "column",
			justifyContent: "space-between",
		},
	});

	return (
		<View style={styles.inline}>
			<Image
				style={styles.albumCover}
				source={require("../assets/icon.png")}
			/>
			<View style={styles.info}>
				<MyText big={true}>505</MyText>
				<MyText>Arctic Monkeys</MyText>
			</View>
		</View>
	);
}

export default SongInformation;
