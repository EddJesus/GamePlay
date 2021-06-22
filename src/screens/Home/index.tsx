import React, { ReactNode } from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

import Profile from '../../components/Profile';

interface Props {
}

function Home({ }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
      </View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
