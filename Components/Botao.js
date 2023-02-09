import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Botao = (props) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[props.bg]}]}>
      <Text style={styles.textbutton}> {props.children}</Text>
      <MaterialCommunityIcons name="arrow-top-left-bold-box" size={24} color="black" />
          </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.secundary,
    fontSize: 14,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    margin: 10,
  },
  textbutton: {
    color: "#fff",
  },
});
