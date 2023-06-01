import { View, Text } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
/**
 * import * as React from 'react';
import { Pressable } from 'react-native';
import { Icon, Input, View } from 'general-components';
import { TextInput } from 'react-native-paper';

export default function App() {
  return (
    <View p={100}>
      <Input
        left={
          <TextInput.Icon
            icon={() => (
              <Pressable
                onPress={() => {
                  console.log('daknnjs');
                }}
              >
                <Icon
                  name="pencil : materialcomm"
                  size={30}
                  color="red"
                  style={{ marginTop: 5 }}
                />
              </Pressable>
            )}
          />
        }
      />
    </View>
  );
}

 */
