import { UpdateMode } from "realm";
import realmDB from "./realm";

export function addPlace(place) {
    realmDB.write(() => {
        realmDB.create(
            "Places",
            {
                id: place.id,
                title: place.title,
                imageUri: place.imageUri,
                address: place.address,
                lat: place.location.latitude,
                lng: place.location.longitude,
            },
            UpdateMode.Modified,
        );
    });
}

export function initData() {
    const promise = new Promise((resolve, reject) => {
        try {
            const places = realmDB.objects("Places");
            resolve(places);
        }
        catch(error) {
            reject();
        }
    });
    return promise
}