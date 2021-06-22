import React, { ReactNode } from "react";

import { 
  Text, 
  View, 
  Image,
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
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}
          e organize suas jogatinas 
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para poder jogar seus game {"\n"}
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
