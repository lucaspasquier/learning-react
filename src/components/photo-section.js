import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default class PhotoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
          {/* User name and avatar */}
          <View style={styles.profileContent}>
              <Image
                style={styles.profileImage} 
                source={{uri: 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwihmsXh5P7cAhVIIJAKHdrLDycQjRx6BAgBEAU&url=https%3A%2F%2Fwww.portallos.com.br%2F2011%2F04%2F07%2Fbleach-o-manga-nao-vai-bem-das-pernas-mas-o-anime-pode-estar-reservando-boas-surpresas%2F&psig=AOvVaw0GbEZeXSI2grz-R2Q5jCd4&ust=1534962927056069'}}/>
              <Text> Name </Text>
          </View>
          
          {/* Photo content */}
          <View>
            <Image 
                style={styles.postImage}
                source={{uri: 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjby-H45P7cAhUEIJAKHcLJACMQjRx6BAgBEAU&url=https%3A%2F%2Fviagenscinematograficas.com.br%2F2017%2F11%2Fjaparatinga-dicas-praias.html&psig=AOvVaw3wpJFX4JC1NjTZnGS-XYYP&ust=1534963007633220'}}/>
          </View>
          
          {/* Heart button */}
          <View>
            <Button title="Like"/>
          </View>
          
          {/* users Comments */}
          <View>
            <Text> Name </Text>
            <Text> Comment </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    profileImage: {
        width: 50,
        height: 50
    },
    postImage: {
        width: '100%',
        height: 250
    },
    profileContent: {
       flexDirection: 'row', 
       justifyContent: 'space-between',
       alignItems: 'flex-start'
    }
});