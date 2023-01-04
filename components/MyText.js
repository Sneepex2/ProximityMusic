import { StyleSheet, Text } from "react-native";
import { useEffect, useState, createContext, useContext } from "react";
import { useTheme } from "./ThemeContext";

function MyText(props) {
	const darkTheme = useTheme();

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
				props.color
					? { color: props.color }
					: darkTheme
					? { color: "white" }
					: { color: "black" },
				props.fontSize ? { fontSize: props.fontSize } : null,
			]}
		>
			{props.children}
		</Text>
	);
}

const styles = StyleSheet.create({
	regularSizeBold: {
		fontSize: 16,
		fontFamily: "Aeonik-Bold",
	},
	regularSizeRegular: {
		fontSize: 16,
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
