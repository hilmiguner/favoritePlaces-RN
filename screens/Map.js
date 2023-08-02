import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";

function Map() {
    const region = {
        latitude: 37.78,
        latitudeDelta: 0.0922,
        longitude: -122.43,
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
});