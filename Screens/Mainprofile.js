import React from 'react';
import { View, Text, StyleSheet, Image ,ImageBackground, FlatList ,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import PersonData from '../components/PersonData';



const MainProfile = props => {


  const [photos, setPhotos] = useState(true);
  
  const img = useSelector(state => {
    const imglist = [];
    for (const key in state.reducer.images) {
      imglist.push({
        id: key,
        thumbnail: state.reducer.images[key].imgurl
      });
    }
    console.log(imglist);
    return imglist;
  });
  


  const followers = useSelector(state => {
    const followerlist = [];
    for (const key in state.reducer.followers) {
      followerlist.push({
        id: key,
        name: state.reducer.followers[key].name,
        userid: state.reducer.followers[key].userid,
        profileimg: state.reducer.followers[key].profileimg
      });
    }
   
    return followerlist;
  });

  return (
    <View style={styles.screen}>  
      <View>
        <ImageBackground
                source={{ uri: 'data:image/jpeg;base64,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' }}
                style={{ height: 300}}
              > 
              <View style= {{alignItems: 'center' , paddingTop: '10%'}}>
                  <Image
                        source={{ uri: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg?1' }}
                        style={styles.profileimage}
                    />
                    <Text style={styles.title}>Manan Shah</Text>
                    <Text style={{fontSize: 15, marginVertical:10}}><AntDesign name="user" size={15}    />MananShah99           <AntDesign name="enviromento" size={15}    />Mumbai</Text>
                    <Text style={{fontSize:17}}>Some Random Bio for random people</Text>
                    </View> 
              </ImageBackground>
      </View>
     
   
   
      <View  style={{backgroundColor:'white',width:'100%',paddingVertical:10, borderBottomWidth : 1}}>
        <View style={{ flexDirection: 'row',paddingVertical:5,justifyContent: 'space-around' }}>
                <TouchableOpacity style={[{alignItems:'center', paddingBottom : 10} ,  photos && { borderBottomWidth : 2 } ]} onPress={()=>{setPhotos(true)}} >
              
                    <Text style={{fontSize:15}}>{img.length}</Text>
                    <Text style={{fontSize:15} }>Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[{alignItems:'center', paddingBottom : 10} ,  !photos && { borderBottomWidth : 2 }]} onPress={()=>{setPhotos(false)}} >
              
                    <Text style={{fontSize:15}}>0</Text>
                    <Text style={{fontSize:15}}>Followers</Text>
                </TouchableOpacity>                  
        </View>
      </View>
    
    
    { photos ? (
          
              
            <FlatList 
              keyExtractor={(item) => item.id}
              data={img}
              numColumns={2}
              renderItem={itemData => ( 
                <View style={{flex : 1 , margin : 1}}>   
                   <Image
                        source={{ uri: itemData.item.thumbnail }}
                        style={{width:'100%' , height:150 }}
                    />              
              
                </View>
              )} 
              />   
         
        ) : (
           <View style={styles.screen}>
               <FlatList 
                    keyExtractor={(item) => item.id}
                    data={followers}
                    renderItem={itemData => ( 
                      <View>                 
                      <PersonData
                          name={itemData.item.name}
                          userid={itemData.item.userid}
                          profileimg={itemData.item.profileimg}
                      />
                      </View>
                    )} 
                    />  
           </View>
         )
   
    } 

    </View>


  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
   flex:1
  },
  profileimage:{
      marginTop:20,
      borderRadius:500,
      height:100,
      width:100,
  },
  title:{
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    padding:10
  },
 
  image: {
    width: '100%',
    height : '100%'  
   
  }
});

export default MainProfile;
