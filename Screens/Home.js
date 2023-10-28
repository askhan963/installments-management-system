import { View, StyleSheet } from 'react-native';
import { Button, Card, Appbar, Paragraph, Title } from 'react-native-paper';

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Installment Management System"  color="#FFFFFF"  style={{ alignItems: 'center' }}/>
        </Appbar.Header>
        
        <Card style={styles.card}>
          <Card.Content>
            <Title>Welcome to IMS</Title>
            <Paragraph>
              The Installment Management System (IMS) offers an overview of your installments, 
              provides scheduling options, reminders, and insightful data representations.
            </Paragraph>
          </Card.Content>
        </Card>
        
        <Button 
          mode="contained" 
          style={styles.button}
          onPress={() => navigation.navigate('Dashboard')}
        >
          Dashboard
        </Button>
        
        <Button 
          mode="contained" 
          style={styles.button}
          onPress={() => navigation.navigate('InstallmentScheduling')}
        >
          Schedule installments
        </Button>
        <Appbar style={styles.footer}>
    <Appbar.Content 
        titleStyle={styles.customTitle}  
        title="All Right Reserver IMS © 2023"  
        color="#FFFFFF"  
        style={{ alignItems: 'center' }} 
    />
</Appbar>

      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      
    },
    header: {
      backgroundColor: '#6200ee',
      color: '#fff',
      alignItems: 'center'
    },
    card: {
      margin: 20,
    },
    button: {
      margin: 20,
      padding: 10,
    },
    footer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#6200ee'
    },
    customTitle: {
        fontSize: 12, 
      },
  });
  export default HomeScreen;
