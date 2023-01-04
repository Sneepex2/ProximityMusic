import { useEffect, useState } from "react";
import * as Font from "expo-font";
import React from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import Navigator from "./components/Navigator";

function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	async function loadFonts() {
		await Font.loadAsync({
			"Aeonik-Bold": require("./assets/fonts/Aeonik-Bold.otf"),
			"Aeonik-Regular": require("./assets/fonts/Aeonik-Regular.otf"),
			"fa-solid-900": require("./assets/icons/fa-solid-900.ttf"),
			"fa-solid-400": require("./assets/icons/fa-regular-400.ttf"),
			"fa-brands-400": require("./assets/icons/fa-brands-400.ttf"),
		});
		setFontsLoaded(true);
	}

	useEffect(() => {
		loadFonts();
	}, []);

	return <ThemeProvider>{fontsLoaded ? <Navigator /> : null}</ThemeProvider>;
}

export default App;
