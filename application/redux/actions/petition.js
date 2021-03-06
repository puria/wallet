import types from '../actionTypes';

export function setPetition(petition, walletAttributes) {
  return {
    type: types.SET_PETITION,
    petition,
    walletAttributes,
  };
}

export function setPetitionError(error) {
  return {
    type: types.SET_PETITION_ERROR,
    error,
  };
}

export function signPetitionAction() {
  return {
    type: types.SIGN_PETITION,
  };
}

export function signPetitionError(error) {
  return {
    type: types.SIGN_PETITION_ERROR,
    error,
  };
}

export function toggleEnableAttribute(attribute) {
  return dispatch => dispatch({
    type: types.TOGGLE_ENABLE_ATTRIBUTE,
    attribute,
  });
}

export function getPetition(petitionLink) {
  return async (dispatch, getState) => {
    let response;
    try {
      response = await fetch(petitionLink);
    } catch (error) {
      return dispatch(setPetitionError('Could not retrieve petition details.'));
    }

    if (!response.ok) {
      let text = await response.text();
      if (!text) text = 'Unknown error';
      return dispatch(setPetitionError(text));
    }
    const json = await response.json();
    const { attributes } = getState();
    const currentAttributes = attributes ? attributes.list : new Map();
    return dispatch(setPetition(json, currentAttributes));
  };
}

export function signPetition(petition, walletId, walletProxyLink, vote, age, gender) {
  const request = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      signatory: walletId.substring(0, 5),
      vote,
      age,
      gender,
    }),
  };

  return async (dispatch) => {
    const response = await fetch(`${walletProxyLink}/sign/petitions/${petition.id}`, request);
    const responseJson = await response.json();
    if (!response.ok) {
      return dispatch(signPetitionError(responseJson.error));
    }
    return dispatch(signPetitionAction());
  };
}
