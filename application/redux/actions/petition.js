import { types } from '../actionTypes';

export function setPetition(petition) {
  return {
    type: types.SET_PETITION,
    petition,
  };
}

export function setPetitionError(error) {
  return {
    type: types.SET_PETITION_ERROR,
    error,
  };
}

export function getPetition(petitionLink) {
  return dispatch =>
    fetch(petitionLink).then(async (response) => {
      if (!response.ok) {
        dispatch(setPetitionError(response.statusText));
      } else {
        const json = await response.json();
        dispatch(setPetition(json));
      }
    });
}
