import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/colors";
import { useEffect, useState } from "react";
import { getByID } from "../util/database";
import LoadingScreen from "../components/UI/LoadingScreen";

function PlaceDetails({ route, navigation }) {
    const [fetchedPlace, setFetchedPlace] = useState();

    function showOnMapHandler() {}

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
        <ScrollView>
            <Image source={{ uri: fetchedPlace.imageUri }} style={styles.image}/>
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{fetchedPlace.address}</Text>
                </View>
                <OutlinedButton icon="map" onPress={showOnMapHandler}>View on Map</OutlinedButton>
            </View>
        </ScrollView>
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
});