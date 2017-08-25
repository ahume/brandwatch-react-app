export function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { payload: {}, type };
    argNames.forEach((arg, index) => {
      action.payload[argNames[index]] = args[index];
    });
    return action;
  };
}
