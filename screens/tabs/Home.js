import React, { useState } from "react";
import { Adverts } from "../../assets/contents";
import AdCard from "../../assets/components/advertCard";
import { Ionicons } from '@expo/vector-icons';
import tuber from '../../assets/images/yam.png';
import pepper from '../../assets/images/pepper.png';
import flour from '../../assets/images/flour.png';
import oil from '../../assets/images/oil.png';
import provision from '../../assets/images/provision.png';
import rice from '../../assets/images/rice.png';
import { useLayoutEffect } from "react";
// import SelectDropdown from "react-native-select-dropdown";
import Modal from "react-native-modal"
import LoginModal from "../../assets/components/modals/loginModal";
import SignInModal from "../../assets/components/modals/signInModal";
import { useSelector } from "react-redux";
import {View,FlatList,SafeAreaView,Text,StyleSheet,ActivityIndicator,ScrollView,Image,
  Button,
  Pressable,
  TextInput,
} from "react-native";
const services =
[
{serviceIcon:'cash-outline', title:'What we sell'},
{serviceIcon:'help', title:'How it works'},
{serviceIcon:'flash', title:'Hot deals'},
{serviceIcon:'md-people', title:'Refer us'},
]

const locations =[
  'V.Island', 'Lekki', 'Ikoyi', 'Ikeja', 'Ajah', 'Banana Island'
]

const productCategories = [
{catImage:tuber, title:'Tubers'},
{catImage:pepper, title:'Pepper'},
{catImage:flour, title:'Flours'},
{catImage:oil, title:'Oil'},
{catImage:provision, title:'Provisions'},
{catImage:rice, title:'Rice'}
]
import { colors } from "../../assets/constants/colors";


export function Home({navigation}) {
const [loginModal,setLoginModal] = useState(false);
const [signInModal,setSignInModal] = useState(false);
const getAuth = useSelector((state)=>state.auth.userInfo)

const handleUserLogin = ()=>{
  getAuth?.token == '' ? setLoginModal(true) : console.log('already logged in',getAuth?.token ); 
}

const userSignin =()=>{
  setSignInModal(true)
}

const handleEmailLogin = ()=>{
  setLoginModal(false);
  setSignInModal(true);
}

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle: '',
      headerLeft: ()=><View style={{flexDirection:'row', gap:10}}>
        <View style={{paddingHorizontal:10, elevation:2,
      backgroundColor:'#fff', borderRadius:3,flexDirection:'row', height:40,width:'35%',alignItems:'center', justifyContent:'center'}}>
        <Ionicons name="location-outline" size={18} color={colors.primary}/>
        
          
      </View> 
      <View style={{paddingHorizontal:10, elevation:2, flexDirection:'row',alignItems:'center',
      backgroundColor:'#fff', borderRadius:3, height:40,width:'60%'}}>
        <TextInput placeholder="Search grocery..." style={{width:'90%',color:'#5B5B5B'}}/>
        <Pressable style={({pressed})=>pressed?{opacity:0.6}:null}>
        <Ionicons name="search-outline" size={18} color={colors.primary}/>
        </Pressable>
      </View>
      </View>
      
    })
  },[navigation])
  return (
    <>
    <LoginModal on={loginModal} off={()=>setLoginModal(false)} emailLogin={handleEmailLogin}/>
    <SignInModal on={signInModal} off={()=>setSignInModal(false)}/>
    <SafeAreaView style={page.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={Adverts}
        renderItem={(ads) => <AdCard info={ads} />}
        keyExtractor={(item) => item.id}
        style={page.AdFlatList}
        contentContainerStyle={page.advertCont}
      />
      
      <ScrollView style={[page.scroll]}>
        
        <View style={page.bikeCard}>
          <View style={
            {justifyContent:'center',
            alignItems:'center',
            width:'40%'
             }}>
            <Text
              style={{
                fontFamily: "montserratBold",
                fontSize: 15,
                
              }}
            >
              Need someone to run an errand?
            </Text>
          </View>

          <View style={
            {justifyContent:'center',
            alignItems:'flex-start',
            width:'20%',
            
             }}>
            <Image style={{height:70, width:70}} alt={'delivery'} source={require('../../assets/images/deliveryBike.png')}/>
          </View>
          <View style={
            {justifyContent:'center',
            alignItems:'center',
            width:'40%',
            
             }}>
            <Pressable onPress={handleUserLogin} style={({pressed})=>pressed? page.ButtonPressed : null}>
              <View style={{backgroundColor:'#FBAF57', paddingVertical:10, paddingHorizontal:20,
              borderRadius:15}}>
                <Text style={{color:'black', fontFamily:'montserratRegular'}}>
                  Send us
                </Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={page.serviceCard}>
          <View style={{alignItems:'flex-start', paddingHorizontal:5}}>
            <Text
              style={{
                fontFamily: "montserratSemiBold",
                fontSize: 12,
              }}
            >
              Our Services
            </Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center',
          flex:1, flexDirection:'row'}}>
            {
              services.map((services, index)=>
              <Pressable style={({pressed})=>pressed? {opacity:0.7}:null} key={index}>
              <View style={{justifyContent:'center', alignItems:'center', marginHorizontal:7}} key={index}>
                <View><Ionicons name={services.serviceIcon} size={35} color={colors.primary}/></View>
                <Text style={{fontFamily:'montserratSemiBold', fontSize:12}}>{services.title}</Text>
              </View>
              </Pressable>
                )
            }
          </View>
  
        </View>

        <View style={page.categoryCard}>
          <View style={{alignItems:'flex-start', paddingHorizontal:5, flexDirection:'row',
          justifyContent:'space-between'}}>
            <View>
              <Text
              style={{
                fontFamily: "montserratSemiBold",
                fontSize: 12,
              }}
            >
              Shop categories
            </Text>
            
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Pressable style={({pressed})=>pressed? {flexDirection:'row', alignItems:'center',opacity:0.7}:{flexDirection:'row', alignItems:'center'}}>
            <Text
              style={{
                fontFamily: "montserratSemiBold",
                fontSize: 12,
                marginBottom:5,
                marginRight:7
              }}
            >
              More
            </Text>
            <Ionicons name='chevron-forward'/>
            </Pressable>
            </View>
          </View>
          <View style={{justifyContent:'center',paddingVertical:30,
          flex:1, flexDirection:'row',gap:25, flexWrap:'wrap', width:'100%', minWidth:'100%'}}>
            {
              productCategories.map((category, index)=>
              <Pressable style={({pressed})=>pressed? {opacity:0.7}:null} key={index}>
              <View style={{justifyContent:'center',gap:8, alignItems:'center', marginHorizontal:7}} key={index}>
                <View style={{justifyContent:'center', alignItems:'center',elevation:2, height:80, width:80,
                borderRadius:60, backgroundColor:'#fff'}}>
                  <Image source={category?.catImage}/>
                </View>
                <Text style={{fontFamily:'montserratSemiBold', fontSize:12}}>{category?.title}</Text>
              </View>
              </Pressable>
                )
            }
          </View>
  
        </View>
        <View style={page.menuCard}>
          
        </View>
      </ScrollView>
     
      
    </SafeAreaView>
    </>
  );
}

const page = StyleSheet.create({
  container: {
    backgroundColor: "#F8F7F7",
    width: "100%",
  },
  scroll: {
    marginTop:10,
    width: "100%",
    paddingHorizontal:10
  },
  bikeCard: {
    display: "flex",
    flexDirection:'row',
    justifyContent:'center',
    padding: 10,
    width: "100%",
    minHeight: 100,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  serviceCard: {
    display: "flex",
    padding: 10,
    width: "100%",
    minHeight: 120,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  categoryCard: {
    display: "flex",
    padding: 10,
    width: "100%",
    minHeight: '20%',
    paddingVertical:20,
    paddingHorizontal:20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  menuCard: {
    display: "flex",
    padding: 10,
    width: "100%",
    height: 300,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  AdFlatList: {
    marginTop:15,
    height: 150,
    flexGrow: 0,
  },
  trendingFlatList: {
    marginTop:15,
    height: 200,
    flexGrow: 0,
  },
  advertCont: {
    gap: 20,
    alignItems: "center",
    padding: 10,
    height: 100,
  },
  trendingItemsCont: {
    gap: 20,
    alignItems: "center",
    padding: 10,
    backgroundColor:'red'
  },
  ButtonPressed :{
opacity:0.7
  },

  text: {
    fontSize: 30,
    color: "#000",
    fontFamily: "montserratBold",
  },
});
