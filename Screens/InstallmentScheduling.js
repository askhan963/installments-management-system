import React, { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, TextInput, Button, RadioButton } from 'react-native-paper';
import DataContext from '../DataContext';

const InstallmentScheduling = ({ navigation }) => {
  const { installments, setInstallments } = useContext(DataContext);
  
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  const [frequency, setFrequency] = React.useState('');
  const [status, setStatus] = useState('active'); // default to active

  const calculateMonthlyPayment = () => {
    // Add logic to calculate monthly payment based on given fields.
    // Placeholder logic: (totalAmount - downPayment) / duration
    const monthly = (parseFloat(totalAmount) - parseFloat(downPayment)) / parseFloat(duration);
    return monthly.toFixed(2);
  };

  const handleAdd = () => {
    const newInstallment = {
      name,
      contact,
      totalAmount,
      downPayment,
      interestRate,
      duration,
      monthlyPayment: calculateMonthlyPayment(),
      notes,
      status,
      frequency,
    };

    setInstallments([...installments, newInstallment]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction color="#FFFFFF" onPress={navigation.goBack} />
        <Appbar.Content title="Schedule Installment" color="#FFFFFF" />
      </Appbar.Header>

      <ScrollView>
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          label="Contact Information"
          value={contact}
          onChangeText={setContact}
          style={styles.input}
        />
        <TextInput
          label="Total Amount"
          value={totalAmount}
          onChangeText={setTotalAmount}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          label="Down Payment"
          value={downPayment}
          onChangeText={setDownPayment}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          label="Interest Rate (%)"
          value={interestRate}
          onChangeText={setInterestRate}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          label="Duration (months)"
          value={duration}
          onChangeText={setDuration}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          label="Notes"
          value={notes}
          onChangeText={setNotes}
          style={styles.input}
        />
       <RadioButton.Group onValueChange={value => setFrequency(value)} value={frequency}>
    <RadioButton.Item label="Monthly" value="Monthly" />
    <RadioButton.Item label="Quarterly" value="Quarterly" />
    <RadioButton.Item label="Annually" value="Annually" />
</RadioButton.Group>


        <Button mode="contained" onPress={handleAdd} style={styles.button}>
          Add Installment
        </Button>
      </ScrollView>

      <Appbar style={styles.footer}>
    <Appbar.Content 
        titleStyle={styles.customTitle}  // apply the custom style here
        title="All Right Reserver IMS © 2023"  
        color="#FFFFFF"  
        style={{ alignItems: 'center' }} 
    />
</Appbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
  },
  input: {
    margin: 16,
  },
  button: {
    margin: 16,
    backgroundColor: '#6200ee',
  },
  footer: {
    backgroundColor: '#6200ee',
  },
  
    customTitle: {
        fontSize: 12, 
      },
});

export default InstallmentScheduling;
