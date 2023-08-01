import { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

function ImagePicker() {
    const [imageUri, setImageUri] = useState();

    async function takeImageHandler() {
        try {
            const response = await launchCamera({
                quality: 0.5,
            });
            setImageUri(response.assets[0].uri);
        }
        catch(error) {
        }
    }

    let imagePreview = <Text>No image taken yet.</Text>;
    if(imageUri) {
        imagePreview = <Image style={styles.image} source={{ uri: imageUri }}/>;
    }

    return(
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image</OutlinedButton>
        </View>
    );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});