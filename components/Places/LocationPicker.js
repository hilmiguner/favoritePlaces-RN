import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";

import Geolocation from "@react-native-community/geolocation";
import { useState } from "react";
import { getMapPreview } from "../../util/location";

function LocationPicker() {
    const [currentLocation, setCurrentLocation] = useState();

    function getLocationHandler() {
        Geolocation.getCurrentPosition(
            (location) => {setCurrentLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude })},
            (error) => {Alert.alert("Error!", error.message)}
        );
    }

    function pickOnMapHandler() {}

    let mapPreview = <Text>No location picked yet.</Text>;
    if(currentLocation) {
        mapPreview = <Image style={styles.mapPreviewImage} source={{ uri: getMapPreview(currentLocation.latitude, currentLocation.longitude)}} />;
    }

    return(
        <View>
            <View style={styles.mapPreview}>
                {mapPreview}
            </View>
            <View style={styles.actions}>
                <OutlinedButton icon="location" onPress={getLocationHandler}>Locate User</OutlinedButton>
                <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>
            </View>
        </View>
    );
}

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: "hidden",
    },
    mapPreviewImage: {
        width: "100%",
        height: "100%",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});