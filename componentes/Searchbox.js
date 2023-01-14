import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Card } from "react-native-shadow-cards";
import React, { useContext, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Feather";
import DropShadow from "react-native-drop-shadow";
import { themeContext } from "../App";

const searchbox = ({setSearch}) => {
  const [OnSearch, setOnSearch] = useState(true);
  const { theme } = useContext(themeContext);
  const searchIcon = (
    <Icon name="search" size={20} color={theme.HeaderIconsColor} />
  );
  const menuIcon = (
    <Icons name="align-left" size={20} color={theme.HeaderIconsColor} />
  );
  const closeIcon = (
    <Icon name="close" size={20} color={theme.HeaderIconsColor} />
  );
  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <View style={[styles.flexBox]}>
          <TouchableOpacity style={styles.flexTop}>
            <Text style={styles.IconStyle}>{menuIcon}</Text>
          </TouchableOpacity>
          <View style={styles.inputBox}>
            {OnSearch ? (
              <View style={{ display: "flex", alignItems: "center" }}>
                <Text
                  style={[styles.textSize, { color: theme.HeaderIconsColor }]}
                >
                  Contacts
                </Text>
              </View>
            ) : (
              <View style={styles.textInputStyle}>
                <TextInput placeholder={"Search here"} onChangeText={(value)=>{setSearch(value)}} />
              </View>
            )}
          </View>
          {OnSearch ? (
            <TouchableOpacity
              style={styles.flexTopTwo}
              onPress={() => {
                setOnSearch(!OnSearch);
              }}
            >
              <Text style={styles.IconStyle}>{searchIcon}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setOnSearch(!OnSearch);
              }}
            >
              <Text style={styles.IconStyle}>{closeIcon}</Text>
            </TouchableOpacity>
          )}
        </View>
      </Card>
      <View>
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      </View>
    </View>
  );
};

export default searchbox;
const styles = StyleSheet.create({
  container: {
    // direction: "flex",
    marginTop: 10,
    marginHorizontal: 10,
    marginLeft: 20,
    // paddding:3
    // height: 300,
  },
  textInputStyle: {
    backgroundColor: "#efefef",
    width: "90%",
    marginLeft: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  cardStyle: {
    height: 50,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
  },
  IconStyle: {
    flex: 1,
  },
  flexTop: {
    marginTop: 5,
  },
  flexTopTwo: {
    marginTop: 3,
  },
  inputBox: {
    flex: 6,
  },
  textSize: {
    fontSize: 20,
  },
});
