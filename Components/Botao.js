import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
export const Botao = (props) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[props.bg]}]}>
      <Text style={styles.textbutton}> {props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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
