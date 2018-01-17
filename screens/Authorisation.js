import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import Router from '../Router';

const securePetitionsLogo = require('../assets/images/secure_petitions_logo.png');

const styles = StyleSheet.create({
  authorisationBox: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    margin: 16,
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'rgb(0,163,158)',
    borderRadius: 2,
    elevation: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: 'rgba(0, 0, 0, 0.54)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: 250,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  container: {
    backgroundColor: 'rgb(246, 246, 246)',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    height: 35,
    marginBottom: 40,
    width: 210,
  },
  textParagraph: {
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
});


export default class Authorisation extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: 'white',
      tintColor: 'rgb(0,163,158)',
      title: 'Authorise Connection',
    },
  }

  constructor(props) {
    super(props);
    this.goToPetitionSummaryGet = this.goToPetitionSummaryGet.bind(this);
  }

  goToPetitionSummaryGet() {
    this.props.navigator.push(Router.getRoute('petitionSummaryGet'));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.authorisationBox}>
          <Image
            style={styles.logo}
            source={securePetitionsLogo}
          />
          <Text style={styles.textParagraph}>would like
            to connect with your DECODE wallet</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={this.goToPetitionSummaryGet}
          >
            <Text style={styles.buttonText}>AUTHORISE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Authorisation.propTypes = {
  navigator: PropTypes.shape({ push: PropTypes.func.isRequired }),
};

Authorisation.defaultProps = {
  navigator: {
    push: () => {
    },
  },
};
