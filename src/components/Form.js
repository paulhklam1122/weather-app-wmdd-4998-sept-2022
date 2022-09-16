import { StyleSheet, Text, TextInput, View } from 'react-native'

const Form = props => (
  <View style={styles.header}>
    <Text style={styles.title}>Open Weather App</Text>
    <TextInput
      style={styles.textInput}
      onEndEditing={props.onSubmit}
      onChangeText={props.onChangeText}
      placeholder='Inpuit a city name and country code'
    />
  </View>
)

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: '100%'
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50
  }
})

export default Form
