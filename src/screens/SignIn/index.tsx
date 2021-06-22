import React, { ReactNode } from "react";

import { 
  Text, 
  View, 
  Image, 
  StatusBar 
} from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";
import { styles } from "./styles";

interface IndexProps {
  children?: ReactNode;
}

function SignIn({ children }: IndexProps) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {"\n"}
          suas jogatinas {"\n"}
          facilmente
        </Text>
        <Text style={styles.subtitle}>
          crie grupos para poder jogar seus game {"\n"}
          favoritos com seus amigos {"\n"}
        </Text>
        <ButtonIcon 
          title={'Entrar com discord'} 
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}

export default SignIn;
