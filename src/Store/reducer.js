import * as actionTypes from "./actions";
import { stat } from "fs";

const initialState = {
  email: {
    value: "",
    validation: {
      required: true,
      email: true
    },
    valid: false,
    meta: {
      touched: false,
      errorMessage: "Please enter a valid email"
    }
  },
  password: {
    value: "",
    validation: {
      required: true,
      minLength: 8,
      maxLength: 25
    },
    valid: false,
    meta: {
      touched: false,
      errorMessage: "Password should be between 8 and 25 characters long"
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_CHANGE_HANDLER_LOGIN:
      let stateDeepClone = JSON.parse(JSON.stringify(initialState));

      stateDeepClone[action.stateIdentifier].value = action.event.target.value;
      stateDeepClone[action.stateIdentifier].meta.touched = true;
      stateDeepClone[action.stateIdentifier].valid = checkValidity(
        stateDeepClone[action.stateIdentifier].value,
        stateDeepClone[action.stateIdentifier].validation
      );

      return {
        ...state,
        [action.stateIdentifier]: stateDeepClone[action.stateIdentifier]
      };
    default:
      return state;
  }
};

const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.email) {
    isValid =
      !!value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  return isValid;
};

export default reducer;
