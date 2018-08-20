import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Linking
} from 'react-native';
import Card from './card.js';
import CardSection from './cardSection';
import Button from './button'

// class AlbumDetail extends Component {
//     render(){
//         return( 
//             <Card>
//             <Text>{props.album.title}</Text>
//         </Card>
//         );
//     }
// }
const AlbumDetail = ({album}) => {
    const {title,artist,thumbnail_image,image,url}=album;
    return(
        <Card>
            <CardSection>
            <View ><Image style={styles.thumbailStyle} source={{uri :image}}/></View>
            <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
            </View>
            </CardSection>
            <CardSection>
                <Image style={styles.image} source={{uri:image}} />
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}>
                Buy Now
                </Button>
            </CardSection>
        </Card>
        
    );
};

const styles=StyleSheet.create({
    headerContentStyle:{
        flexDirection:'column',
        justifyContent: 'space-around'
    },
    thumbailStyle:{
        height:50,
        width:50
    },
    headerTextStyle:{
        fontSize:18
    },
    image:{
        height:300,
        width:null,
        flex:1
    }
});
export default AlbumDetail; 

