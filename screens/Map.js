import { Alert, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { Colors } from "../constants/colors";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import IconButton from "../components/UI/IconButton";

function Map({ navigation, route }) {
    const initialLocation = route.params && { 
        latitude: route.params.initialLat, 
        longitude: route.params.initialLng 
    };
    
    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    const latitude = route.params.latitude;
    const longitude = route.params.longitude;

    const region = {
        latitude: initialLocation ? initialLocation.latitude : latitude,
        latitudeDelta: 0.0922,
        longitude: initialLocation ? initialLocation.longitude : longitude,
        longitudeDelta: 0.0421,
    };
    
    if(region.latitude == null || region.longitude == null) {
        // function reloadHelper() {
        //     navigation.replace("Map", { latitude: latitude, longitude: longitude });
        // }
        return(
            <View style={styles.textContainer}>
                <Text style={styles.text}>Map couldn't loaded. Please check you GPS services and restart the application.</Text>
            </View>
        );
    }

    function selectLocationHandler(event) {
        const latitude = event.nativeEvent.coordinate.latitude;
        const longitude = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({ latitude: latitude, longitude: longitude });
    }

    const savePickedLocationHandler = useCallback(() => {
        if(!selectedLocation) {
            Alert.alert("No Location Picked", "You have to pick a location (by tapping on the map) first.");
            return;
        }
        else {
            navigation.navigate("AddPlace", { pickedLatitude: selectedLocation.latitude, pickedLongitude: selectedLocation.longitude });
        }
    }, [navigation, selectedLocation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: initialLocation ? null : ({ tintColor }) => (
                <IconButton icon="save" size={24} color={tintColor} onPress={savePickedLocationHandler}/>
            ),
        });
    }, [navigation, savePickedLocationHandler]);

    return(
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={region} onPress={initialLocation ? null : selectLocationHandler}>
            {selectedLocation && <Marker title="Picked Location" coordinate={selectedLocation}/>}
        </MapView>
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