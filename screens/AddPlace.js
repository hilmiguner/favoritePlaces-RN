import { StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { addPlace } from "../util/database";
import { useState } from "react";
import LoadingScreen from "../components/UI/LoadingScreen";

function AddPlace({ navigation }) {
    const [isAddingData, setIsAddingData] = useState(false);

    function createPlaceHandler(place) {
        setIsAddingData(true);
        addPlace(place).then(() => navigation.navigate("AllPlaces"));
    }

    if(isAddingData) {
        return <LoadingScreen>Adding your favorite place to list!</LoadingScreen>
    }

    return(
        <PlaceForm onCreatePlace={createPlaceHandler}/> 
    );
}

export default AddPlace;

const styles = StyleSheet.create({

});