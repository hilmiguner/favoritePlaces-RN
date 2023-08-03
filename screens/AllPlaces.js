import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { initData } from "../util/database";
import LoadingScreen from "../components/UI/LoadingScreen";

function AllPlaces() {
    const [dbInitialized, setDbInitialized] = useState(false);
    const [loadedPlaces, setLoadedPlaces] = useState([]);

    const isFocused = useIsFocused();
    useEffect(() => {
        if(isFocused) {
            initData().then((places) => {
                setLoadedPlaces(places);
                setTimeout(() => setDbInitialized(true), 2000);
                
            }).catch((error) => console.log("REALM ERROR [" + new Date().toString() + "]: " + error));
        }
    }, [isFocused]);

    if(!dbInitialized) {
        return <LoadingScreen />;
    }

    return(
        <PlacesList places={loadedPlaces}/>
    );
}

export default AllPlaces;