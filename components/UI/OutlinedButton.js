import { Pressable, StyleSheet, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/colors";


function OutlinedButton({ onPress, icon, children, color, width }) {
    return(
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed, color && { borderColor: color}, { width: width }]} onPress={onPress}>
            <Ionicons style={styles.icon} name={icon} size={18} color={color ? color : Colors.primary500}/>
            <Text style={[styles.text, color && { color: color }]}>{children}</Text>
        </Pressable>
    );
}

export default OutlinedButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.primary500,
        minWidth: 150,
    },
    pressed: {
        opacity: 0.7,
    },
    icon: {
        marginRight: 6,
    },
    text: {
        color: Colors.primary500,
    },
});