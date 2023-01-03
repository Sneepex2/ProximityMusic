import { StyleSheet, Text } from "react-native";

function MyText(props) {
	return (
		<Text
			style={[
				props.big
					? styles.bigSizeRegular
					: props.bigBold
					? styles.bigSizeBold
					: props.regularBold
					? styles.regularSizeBold
					: styles.regularSizeRegular,
				props.color ? { color: props.color } : { color: "black" },
				props.fontSize ? { fontSize: props.fontSize } : null,
			]}
		>
			{props.children}
		</Text>
	);
}

const styles = StyleSheet.create({
	regularSizeBold: {
		fontSize: 14,
		fontFamily: "Aeonik-Bold",
	},
	regularSizeRegular: {
		fontSize: 14,
		fontFamily: "Aeonik-Regular",
	},
	bigSizeBold: {
		fontSize: 40,
		fontFamily: "Aeonik-Bold",
	},
	bigSizeRegular: {
		fontSize: 40,
		fontFamily: "Aeonik-Regular",
	},
});

export default MyText;
