import { UpdateMode } from "realm";
import realmDB from "./realm";

export function addPlace(place) {
    const promise = new Promise((resolve, reject) => {
        try {
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
            resolve();
        }
        catch(error) {
            reject();
        }
    });
    return promise;
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