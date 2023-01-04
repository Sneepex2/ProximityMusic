import { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapCard from "./MapCard";
import { useTheme } from "./ThemeContext";
import UserCard from "./UserCard";

function Overlay(props) {
	const darkTheme = useTheme();

	const styles = StyleSheet.create({
		container: {
			backgroundColor: darkTheme
				? "rgba(0, 0, 0, 0.15)"
				: "rgba(128, 0, 128, 0)",
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
		},
	});

	return (
		<View
			onTouchStart={() => {
				props.setMapPressed(true);
			}}
			onTouchEnd={() => {
				props.setMapPressed(false);
			}}
			style={styles.container}
		>
			<MapCard
				x={200}
				y={300}
				mapPressed={props.mapPressed}
				expand={props.expand}
				setExpand={props.setExpand}
			/>
			{props.expand ? <UserCard setExpand={props.setExpand} /> : null}
		</View>
	);
}

export default Overlay;
