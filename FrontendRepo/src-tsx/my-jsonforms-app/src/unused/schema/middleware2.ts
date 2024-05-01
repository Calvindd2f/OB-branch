const middleware = (
  state: JsonFormsCore,
  action: CoreActions,
  defaultReducer: (state: JsonFormsCore, action: CoreActions) => JsonFormsCore
) => {
  return defaultReducer(state, action);
};
