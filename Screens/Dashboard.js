import React, { useContext, useState } from 'react';
import { View, StyleSheet, ScrollView, Modal, Text } from 'react-native';
import { Appbar, DataTable, Button, IconButton } from 'react-native-paper';
import DataContext from '../DataContext';

const Dashboard = ({ navigation }) => {
  const { installments } = useContext(DataContext);
  const [selectedInstallment, setSelectedInstallment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openDetails = (installment) => {
    console.log(installment)
    setSelectedInstallment(installment);
    setModalVisible(true);
  };

  const closeDetails = () => {
    setSelectedInstallment(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Dashboard" color="#FFFFFF" />
        <Appbar.Action icon="plus" color="#FFFFFF" onPress={() => navigation.navigate('InstallmentScheduling')} />
      </Appbar.Header>

      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title numeric>Total Amount</DataTable.Title>
            <DataTable.Title numeric>Down Payment</DataTable.Title>
            <DataTable.Title numeric>Monthly Payment</DataTable.Title>
          </DataTable.Header>

          {installments.map((installment, index) => (
            <DataTable.Row key={index} onPress={() => openDetails(installment)}>
              <DataTable.Cell>{installment.name}</DataTable.Cell>
              <DataTable.Cell numeric>{installment.totalAmount}</DataTable.Cell>
              <DataTable.Cell numeric>{installment.downPayment}</DataTable.Cell>
              <DataTable.Cell numeric>{installment.monthlyPayment}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>

      {selectedInstallment && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeDetails}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Name: {selectedInstallment.name}</Text>
              <Text style={styles.modalText}>Contact: {selectedInstallment.contact}</Text>
              <Text style={styles.modalText}>Notes: {selectedInstallment.notes}</Text>
              <Text style={styles.modalText}>Status: {selectedInstallment.status}</Text>
              <Text style={styles.modalText}>Total Amount: ${selectedInstallment.totalAmount}</Text>
              <Text style={styles.modalText}>Down Payment: ${selectedInstallment.downPayment}</Text>
              <Text style={styles.modalText}>Interest Rate: {selectedInstallment.interestRate}%</Text>
              <Text style={styles.modalText}>Duration: {selectedInstallment.duration} months</Text>
              <Text style={styles.modalText}>Frequency: {selectedInstallment.frequency}</Text>
              <Text style={styles.modalText}>Monthly Payment: ${selectedInstallment.monthlyPayment}</Text>

              <Button onPress={closeDetails}>Close</Button>
            </View>
          </View>
        </Modal>
      )}

      <View style={styles.footer}>
        <Button mode="outlined" onPress={() => navigation.navigate('Home')} style={styles.footerButton}>Home</Button>
        <Button mode="contained" onPress={() => navigation.navigate('InstallmentScheduling')} style={styles.footerButton}>Add New Installment</Button>
      </View>

      <Appbar style={styles.footerBar}>
      <Appbar.Content 
        titleStyle={styles.customTitle}   title="All Right Reserver IMS © 2023"    color="#FFFFFF"   style={{ alignItems: 'center' }} 
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  footerButton: {
    margin: 5,
  },
  customTitle: {
    fontSize: 12, 
  },
  footerBar: {
    backgroundColor: '#6200ee',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black'
  },
});

export default Dashboard;
