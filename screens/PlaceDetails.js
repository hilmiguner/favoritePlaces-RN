import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/colors";
import { useEffect, useState } from "react";
import { getByID } from "../util/database";
import LoadingScreen from "../components/UI/LoadingScreen";

function PlaceDetails({ route, navigation }) {
    const [fetchedPlace, setFetchedPlace] = useState();

    function showOnMapHandler() {
        navigation.navigate("Map", { initialLat: fetchedPlace.lat, initialLng: fetchedPlace.lng });
    }

    const selectedPlaceID = route.params.placeID;

    useEffect(() => {
        async function loadPlaceData() {
            const place = await getByID(selectedPlaceID);
            setFetchedPlace(place);
            navigation.setOptions({
                title: place.title,
            });
        }
        loadPlaceData();
    }, [selectedPlaceID]);

    if(!fetchedPlace) {
        return <LoadingScreen>Getting your favorite place!</LoadingScreen>;
    }

    return(
        <View style={{ flex: 1,}}>
            <Image source={{ uri: fetchedPlace.imageUri }} style={styles.image}/>
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{fetchedPlace.address}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <OutlinedButton icon="map" onPress={showOnMapHandler} width={160}>View on Map</OutlinedButton>
                    <OutlinedButton icon="trash" onPress={null} color={Colors.error} width={300}>Delete</OutlinedButton>
                </View>
            </View>
        </View>
    );
}

export default PlaceDetails;

const styles = StyleSheet.create({
    image: {
        height: "35%",
        minHeight: 300,
        width: "100%",
    },
    locationContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    addressContainer: {
        padding: 20,
    },
    address: {
        color: Colors.primary500,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 12,
        alignItems: "center",
        alignSelf: "stretch",
    },
});