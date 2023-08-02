import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { Colors } from "../constants/colors";

function Map({ navigation, route }) {
    const latitude = route.params.latitude;
    const longitude = route.params.longitude;

    if(latitude == null || longitude == null) {
        function reloadHelper() {
            navigation.replace("Map", { latitude: latitude, longitude: longitude });
        }
        return(
            <View style={styles.textContainer}>
                <Text style={styles.text}>Map couldn't loaded. Please check you GPS services and restart the application.</Text>
            </View>
        );
    }

    const region = {
        latitude: latitude,
        latitudeDelta: 0.0922,
        longitude: longitude,
        longitudeDelta: 0.0421,
    };
    return(
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={region}/>
    );
}

export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    text: {
        textAlign: "center",
        color: Colors.primary100,
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});