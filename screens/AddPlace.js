import { StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { addPlace } from "../util/database";

function AddPlace({ navigation }) {
    function createPlaceHandler(place) {
        addPlace(place);
        navigation.navigate("AllPlaces");
    }

    return(
        <PlaceForm onCreatePlace={createPlaceHandler}/> 
    );
}

export default AddPlace;

const styles = StyleSheet.create({

});