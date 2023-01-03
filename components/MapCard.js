import { StyleSheet, View } from "react-native";
import MyText from "./MyText";
import { Dimensions } from "react-native";
import FontAwesome, { SolidIcons } from "react-native-fontawesome";
import React, { useEffect, useRef, useState } from "react";

function MapCard(props) {
	const [isToTheRight, setIsToTheRight] = useState(false);

	const styles = StyleSheet.create({
		card: {
			zIndex: 3,
			opacity: 1,
			minWidth: 100,
			flexDirection: "row",
			position: "relative",
		},
		songInfo: {
			backgroundColor: "white",
			borderRadius: 4,
			padding: 2,
		},
		toTheRight: {
			marginLeft: props.x - 5,
			marginTop: props.y,
		},
		toTheLeft: {
			position: "absolute",
			right: Dimensions.get("window").width - props.x - 5,
			marginTop: props.y,
		},
		circle: {
			width: 10,
			height: 10,
			backgroundColor: "purple",
			borderRadius: 5,
		},
	});

	return (
		<View
			style={[
				styles.card,
				isToTheRight ? styles.toTheRight : styles.toTheLeft,
			]}
		>
			{isToTheRight ? (
				<>
					<View
						style={[
							styles.circle,
							isToTheRight
								? { marginRight: 5 }
								: { marginLeft: 5 },
						]}
					/>
					<View style={styles.songInfo}>
						<MyText>Chilly Night</MyText>
						<MyText fontSize={10}>SPEECHLESS</MyText>
					</View>
				</>
			) : (
				<>
					<View style={styles.songInfo}>
						<MyText>Chilly Night</MyText>
						<MyText fontSize={10}>SPEECHLESS</MyText>
					</View>
					<View
						style={[
							styles.circle,
							isToTheRight
								? { marginRight: 5 }
								: { marginLeft: 5 },
						]}
					/>
				</>
			)}
		</View>
	);
}

export default MapCard;
