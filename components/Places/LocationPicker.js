import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";

import Geolocation from "@react-native-community/geolocation";
import { useState } from "react";
import { getMapPreview } from "../../util/location";

import { useNavigation } from "@react-navigation/native";

function LocationPicker() {
    const [currentLocation, setCurrentLocation] = useState();

    let initialLocation = { latitude: null, longitude: null };

    Geolocation.getCurrentPosition(
        (location) => {initialLocation = { latitude: location.coords.latitude, longitude: location.coords.longitude }},
        (error) => {Alert.alert("Error!", error.message)}
    );

    const navigation = useNavigation();

    function getLocationHandler() {
        Geolocation.getCurrentPosition(
            (location) => {setCurrentLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude })},
            (error) => {Alert.alert("Error!", error.message)}
        );
    }

    function pickOnMapHandler() {
        navigation.navigate("Map", { latitude: initialLocation.latitude, longitude: initialLocation.longitude });
    }

    let mapPreview = <Text>No location picked yet.</Text>;
    if(currentLocation) {
        const uri = getMapPreview(currentLocation.latitude, currentLocation.longitude);
        mapPreview = <Image style={styles.mapPreviewImage} source={{ uri: uri }} />;
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