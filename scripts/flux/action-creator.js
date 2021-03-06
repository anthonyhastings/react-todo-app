import { ActionCreator } from "fluxthis";
import actions from "./actions";

const actionCreator = new ActionCreator({
  displayName: "actionCreator",

  setUserInput: {
    type: actions.USER_INPUT_SET,
    payload: ActionCreator.PayloadTypes.string.isRequired
  }
});

export default actionCreator;
