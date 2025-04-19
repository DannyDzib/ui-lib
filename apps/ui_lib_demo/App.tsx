import React from 'react';
import { SafeAreaView } from 'react-native';

import { MyButton } from 'ui';

function App(): React.JSX.Element {
  const text = {
    label: 'Continuar',
  };
  return (
    <SafeAreaView>
      <MyButton
        label={text.label}
        onPress={() => {
          console.log(text.label);
        }}
      />
    </SafeAreaView>
  );
}

export default App;
