import React from 'react';
import { StyleSheet, Image, Text, View, Button, FlatList } from 'react-native';

const decodeLogo = require('../assets/images/wallet_logo.png');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  logo: {
    height: 60,
    marginBottom: 30,
    width: 80,
  },
  textSubHeading: {
    alignSelf: 'flex-start',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
  },
  textContainer: {
    marginBottom: 30,
    padding: 10,
  },
  flatList: {
    marginTop: 15,
    marginBottom: 30,
  },
  buttonContainer: {
    width: 300,
  },
  textParagraph: {
    marginBottom: 15,
  },
  petitionSummary: {
    backgroundColor: '#EEE',
    width: 300,
  },
  petitionHeading: {
    fontSize: 14,
    color: '#9B9B9B',
  },
});

function PetitionSummary() {
  return (
    <View style={styles.container}>
      <Text style={styles.textSubHeading}>Petition Summary</Text>
      <View style={styles.petitionSummary}>
        <Text style={styles.petitionHeading}>Title</Text>
        <Text>Create communal space in Atlantis</Text>
        <Text style={styles.petitionHeading}>Created by</Text>
        <Text>John Bloggs, Atlantis Community College</Text>
        <Text style={styles.petitionHeading}>Closing date</Text>
        <Text>31 August 2020</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textParagraph}>To sign this petition you must be a resident
        of Atlantis. To demonstrate that you are a resident of Atlantis,
        you are required to share the
        following attribute with Secure Petitions when you sign the petition.</Text>
        <FlatList
          style={styles.flatList}
          data={[{ key: '- Atlantis Residency' }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
        <Text>You do not currently have this attribute
        in your wallet. Select
        Get Attribute below to be guided through the process of
        verifying your Atlantis Residency with
        Atlantis Council. You will only have to do this once,
        after which your Atlantis Residency attribute will
        be stored in your wallet ready for next time you need it.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => true}
          title="Get Attribute"
          color="rgb(0,163,158)"
        />
      </View>
    </View>
  );
}
export default PetitionSummary;
