import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';


const Setting = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={{
      flex: 1,
      padding: 16,
      backgroundColor: darkMode ? 'grey' : 'white',
    }}>
      <View style={styles.setting}>
        <Text>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default Setting;
