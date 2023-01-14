import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Searchbox from "../componentes/Searchbox";
import { Avatar } from "react-native-image-avatars";
import { themeContext } from "../App";
import Icon from "react-native-vector-icons/FontAwesome";

const data = [
  {
    name: "Joe Belfiore",
    color: "green",
    title: "In a world far away",
    key: 1,
    image:
      "https://media.gettyimages.com/id/96716785/photo/joe-belfiore-vice-president-and-general-director-of-microsoft-ehome-division-speaks-during-the.jpg?s=612x612&w=gi&k=20&c=56aVnbs0Huqa59UQL9Gg_7rfnenHds3PUNDzuOM1so0=",
  },
  {
    name: "Bill Gates",
    color: "green",
    title: "What I'm doing here?",
    key: 2,
    image:
      "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
  },
  {
    name: "Mark Zuckerberg",
    color: "orange",
    title: "Really Busy WhatsApp only",
    key: 3,
    image:
      "https://pyxis.nymag.com/v1/imgs/8ca/b75/c196b6f34c272c34653b0fbeba888abd35-zuckerberg.jpg",
  },

  {
    name: "Marissa Mayer",
    color: "red",
    title: "In a rush to catch a plane",
    key: 4,
    image:
      "https://media.wired.com/photos/5fb4493f941d009a0c07f3be/master/pass/Business-Marissa-Meyer-h_15074779.jpg",
  },

  {
    name: "Sundar Pichai",
    title: "do android dream of electric sheep",
    color: "green",
    key: 5,
    image:
      "https://sugermint.com/wp-content/uploads/2020/04/Biography-of-Sundar-Pichai.jpg",
  },

];

const Homescreen = () => {
  const [datas, setdatas] = useState(data);
  const { theme } = useContext(themeContext);

  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log(search);
  }, [search]);

  const dataList = ({ item }) => (
    <View style={styles.cardcontainer}>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 5,

          flexDirection: "row",
        }}
      >
        <View>
          <Avatar imageUrl={item.image} size="small" borderColor="#f2f2f2" />
          <View
            style={[
              {
                backgroundColor: item.color,
              },
              styles.statusStyle,
            ]}
          ></View>
        </View>
        <View style={styles.TestWrapper}>
          <Text
            style={[
              styles.textSize,
              styles.fontSizeStyle,
              { color: theme.ContactNameColor },
            ]}
          >
            {item.name}
          </Text>
          <Text
            style={[
              styles.textDescriptionSize,
              { color: theme.ContactInfoColor },
            ]}
          >
            {item.title}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <Searchbox setSearch={setSearch} />

      <View>
        {/* <ScrollView style={styles.scrollView}> */}

        <View>
          <FlatList
            contentContainerStyle={styles.list}
            data={datas}
            renderItem={dataList}
          />
        </View>
        {/* </ScrollView> */}
      </View>
      <View
        style={[styles.fabstyle,{ backgroundColor: theme.BackgroundColor,}]}
      >
        <Text>
          <Icon name="pencil" size={20} color={theme.HeaderIconsColor} />
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
 fabstyle :{
    position: "absolute",
    bottom: 20,
    right: 30,
    width: 70,
    height: 70,
    borderRadius: 80,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  fontSizeStyle: {
    fontSize: 21,
  },
  cardcontainer: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    borderWidth: 0,
    marginLeft: 10,
  },
  statusStyle: {
    width: 15,
    height: 15,
    position: "absolute",
    top: 85,
    left: 85,
    borderRadius: 40,
  },
  TestWrapper: {
    justifyContent: "center",
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    //   paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  textSize: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textDescriptionSize: {
    fontSize: 12,
    fontWeight: "300",
  },
});
export default Homescreen;
