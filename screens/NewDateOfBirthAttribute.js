import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../application/components/Button/Button';
import styles from './styles';
import { saveDateOfBirth } from '../application/redux/actions/attributes';

const NewDateOfBirthAttribute = props => (
  <View style={styles.attributesManagementContainer}>
    { props.featureToggles['test'] && <Button name="addDateOfBirth" onPress={() => props.saveDateOfBirth(props.walletId)} /> }
  </View>
);

NewDateOfBirthAttribute.propTypes = {
  saveDateOfBirth: PropTypes.func.isRequired,
  walletId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  walletId: state.wallet.id,
  featureToggles: state.featureToggles,
});

const mapDispatchToProps = dispatch => ({
  saveDateOfBirth: walletId => dispatch(saveDateOfBirth('01/01/1990', walletId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDateOfBirthAttribute);
