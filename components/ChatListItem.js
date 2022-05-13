import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"; 

const ChatListItem = ({ name, lastChat, image, userId, timestamp}) => {
  //console.log(name)
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.UserItem}
      onPress={() => {
        navigation.navigate("Chat", {
          userId: userId,
          name: name,
          image: image,
        });
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.detailscontainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.lastmsg}>{lastChat}</Text>
        </View>
      </View>
      <Text style={styles.msgsent}>{timestamp}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  UserItem: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 200,
  },
  container: {
    marginVertical: 10,
    flexDirection: "row",
  },
  detailscontainer: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
  title: {
    
    fontSize: 15,
  },
  lastmsg: {
    color: "#808080",
    fontSize: 13,
  },
  msgsent: {
    color: "#808080",
    fontSize: 10,
    marginBottom: 10,
  },
});

export default ChatListItem;