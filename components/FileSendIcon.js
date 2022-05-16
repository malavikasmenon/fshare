import React, {useState, useCallback} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as DocumentPicker from 'expo-document-picker';

const FileSendIcon = ({size, iconstyles}) => {
  const [singleFile, setSingleFile] = useState('');
  const [multipleFile, setMultipleFile] = useState([]);

  const selectOneFile = useCallback(async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.getDocumentAsync({});
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      console.warn(err)
    }
  }, []);
 
  

    return(
      <TouchableOpacity onPress={selectOneFile}>
      <MaterialCommunityIcons name="file-send-outline" size={size} color="black" style={iconstyles}/>
      </TouchableOpacity>
    )
}

export default FileSendIcon
