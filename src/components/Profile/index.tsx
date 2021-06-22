import React, { ReactNode } from "react";

import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

interface Props {}

function Profile({}: Props) {
  return (
    <View style={styles.container}>
        <Avatar urlImage="https://github.com/EddJesus.png"/>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

          <Text style={styles.username}>Eduardo</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}

export default Profile;
