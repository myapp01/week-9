import React from 'react' 
import {View,Text,Image}from 'react-native'

export const typeFishstop=(props)=>{
    return(
        <View> style={{alignItems:"center"}}
            <Text>Type{props.name}</Text>
            <Text>111</Text>
        </View>
    )
}


const Banana=()=>{
    let pic={
        uri:'https://img.bangkokbiznews.com/kt/media/image/news/2017/08/25/770201/750x422_770201_1503641391.jpg',
    }

    return(
        <View style={{backgroundColor:"red",alignItems:"center"}}>
            <Image
            style={{width:850,height:850,marginTop:20}}
            source={pic} />
            <Text>ปวดหัวเลย</Text>
            <typeFishstop name='1. Cavendish Banana'></typeFishstop>
        </View>
    )
}
export default Banana;