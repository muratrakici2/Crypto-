import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Clipboard, Keyboard, ScrollView } from 'react-native';

export default function App() {
  const [icerik, setIcerik] = useState()
  const [kriptolananDeger, setKriptolananDeger] = useState()
  const [acilanDeger, setacilanDeger] = useState()
  function kilitle() {
    var karakter = Number(icerik.length) - 1;
    var basla = -1;
    var ilk;
    var iki;
    let kriptolananDeger_ = ""
    while (basla < karakter) {
      basla++;
      ilk = icerik.charCodeAt(basla) + karakter + 1;
      iki = String.fromCharCode(ilk)
      kriptolananDeger_ = kriptolananDeger_.concat(iki)
    }
    setKriptolananDeger(kriptolananDeger_)
    setacilanDeger(null);
    Keyboard.dismiss();
    temizle();
  }
  function ac() {
    var karakter = Number(icerik.length) - 1;
    var basla = -1;
    var ilk;
    var iki;
    let acilanDeger_ = ""
    while (basla < karakter) {
      basla++;
      ilk = icerik.charCodeAt(basla) - karakter - 1;
      iki = String.fromCharCode(ilk)
      acilanDeger_ = acilanDeger_.concat(iki)

    }
    setacilanDeger(acilanDeger_)
    setKriptolananDeger(null);
    Keyboard.dismiss();
    temizle();
  }
  function temizle() {
    setIcerik(null);

  }
  const writeToClipboard = async (text) => {
    await Clipboard.setString(text);
    alert('Kopyalandi !');
  };
  const readFromClipboard = async () => {
    const clipboardData = await Clipboard.getString();
    setIcerik(clipboardData);
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row",marginHorizontal:15,marginTop:50,marginVertical:15}}>
        <TextInput placeholder='Değer' placeholderTextColor={"#590209"} style={styles.yapiştirrr} value={icerik} onChangeText={icerik => setIcerik(icerik)}></TextInput>
        <TouchableOpacity disabled={icerik && icerik.length === 0} onPress={readFromClipboard} style={{ borderWidth: 1, backgroundColor: '#023059', borderRadius: 15,marginLeft:5 }}>
          <Text style={{ fontSize: 20, marginVertical: 15, marginHorizontal: 15, color: '#CEECF2' }}>Yapıştır</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity disabled={icerik && icerik.length === 0} onPress={kilitle} style={styles.butonlar}>
        <Text style={{ fontSize: 20, padding:15, color: '#CEECF2' }}>Kilitle</Text>
      </TouchableOpacity>

      <TouchableOpacity disabled={icerik && icerik.length === 0} onPress={ac} style={styles.butonlar}>
        <Text style={{ fontSize: 20, padding:15,alignItems:"center",justifyContent:"center", color: '#CEECF2' }}>Çöz</Text>
      </TouchableOpacity>

      <ScrollView >
        {kriptolananDeger ? <TouchableOpacity style={styles.yazi} onLongPress={() => writeToClipboard(kriptolananDeger)}>
          <Text style={{ fontSize: 20, }}>{kriptolananDeger}</Text>
        </TouchableOpacity> : null}

        {acilanDeger ? <TouchableOpacity style={styles.yazi} onLongPress={() => writeToClipboard(acilanDeger)}>
          <Text style={{ fontSize: 20, }}>{acilanDeger}</Text>
        </TouchableOpacity> : null}
      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  input: {
    borderColor: '#590209',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginTop: 50,
    marginHorizontal: 15,
    color: '#590209',
    fontWeight: 'bold',
  },
  yazi: {
    borderWidth: 1,
    padding: 5,
    margin: 10,
    borderRadius:5
  },
  yapiştirrr: {
    borderColor: '#590209',
    borderWidth: 2,
    borderRadius: 15,
    flex:1,
    fontSize:16,
    fontWeight: 'bold',  
  },

    butonlar: {
      borderWidth: 1,
       backgroundColor: '#023059',
        borderRadius: 15,
        marginHorizontal:15,
        marginVertical:5,
        alignItems:"center"
        
    },
});
