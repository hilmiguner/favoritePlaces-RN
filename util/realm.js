import Realm from "realm";

class PlaceSchema extends Realm.Object {}
PlaceSchema.schema = {
    name: "Places",
    properties: {
        id: "int",
        title: "string",
        imageUri: "string",
        address: "string",
        lat: "float",
        lng: "float",
    },
    primaryKey: "id"
};

const realmDB = new Realm({ schema: [PlaceSchema] });
export default realmDB;