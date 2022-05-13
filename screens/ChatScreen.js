import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ChatListItem from "../components/ChatListItem";
import FileSendIcon from "../components/FileSendIcon";

const ChatScreen = () => {
  const [loading, setloading] = useState(false); 
  const [error, seterror] = useState(false); 
  const [refresh, setrefresh] = useState(false); 
  const [users, setusers] =useState([])
  
    const loadUsers = useCallback(async () => {
        setrefresh(true);
        seterror(null);
        try {
            const res = await fetch("https://mocki.io/v1/a619c441-b339-46a0-944e-1b5b99da8bce");
            if (!res.ok) {
                throw new Error("Something went wrong...");
            }
            const resData = await res.json();
            //console.log(resData)
            setusers(resData)
        } catch(e){
            seterror(e);
        }
        setrefresh(false);
    }, [setrefresh, seterror]);

    useEffect(() => {
    setloading(false);
    loadUsers().then(() => {
      setrefresh(false);
      
    });
  }, [loadUsers, setloading]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#075E54" />
      </View>
    );
  }

  if (error) {
    <View style={styles.centered}>
      <Text>An Error Occured....Try AGain?</Text>
      <Button title="Try Again" onPress={loadUsers} color="#075E54" />
    </View>;
  }

  if (!loading && users.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>
          Sorry No Users Available..
        </Text>
      </View>
    );
  }
  //console.log(typeof users);
  return (
    <View style={{ flex: 1, padding: 10 }}>
       <FlatList
        onRefresh={loadUsers}
        refreshing={refresh}
        data={users}
        renderItem={(Itemdata) => (
          <ChatListItem
            name={Itemdata.item.name}
            lastChat={Itemdata.item.lastChat}
            image={Itemdata.item.picture}
            userId={Itemdata.item.id}
            timestamp={Itemdata.item.latest_timestamp}
          />
        )}
      />
      <View style={{position: 'fixed', right:0, bottom:0, flexDirection : 'row'}}>
        <FileSendIcon size={28} iconstyles={styles.icon}/>  
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {padding:10, backgroundColor: '#BEBEBE', borderRadius:28, opacity:0.7, marginRight:20, marginBottom:20}
});



export default ChatScreen;