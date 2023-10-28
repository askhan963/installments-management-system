import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, RadioButton, Button } from 'react-native-paper';
import { DataContext } from './DataContext';

function InstallmentScheduling() {
  const { installments, setInstallments } = useContext(DataContext);

  const [totalAmount, setTotalAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [frequency, setFrequency] = useState('');

  const addInstallment = () => {
    const newInstallment = {
      totalAmount,
      duration,
      frequency
    };
    setInstallments([...installments, newInstallment]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Total Amount"
        value={totalAmount}
        onChangeText={setTotalAmount}
      />
      <TextInput
        label="Duration"
        value={duration}
        onChangeText={setDuration}
      />
      <RadioButton.Group
        onValueChange={newValue => setFrequency(newValue)}
        value={frequency}
      >
        <RadioButton.Item label="Monthly" value="Monthly" />
        <RadioButton.Item label="Quarterly" value="Quarterly" />
      </RadioButton.Group>

      <Button mode="contained" onPress={addInstallment}>
        Add Installment
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default InstallmentScheduling;
