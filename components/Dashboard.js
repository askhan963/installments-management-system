import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { DataContext } from './DataContext';

function Dashboard({ navigation }) {
  const { installments } = useContext(DataContext);

  return (
    <View style={styles.container}>
      {/* You can list out the installments here */}
      {installments.map((installment, index) => (
        <Text key={index}>
          {installment.totalAmount} ({installment.duration} {installment.frequency})
        </Text>
      ))}

      <Button mode="contained" onPress={() => navigation.navigate('Schedule')}>
        Add Installment
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
