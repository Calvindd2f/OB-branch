interface Middleware {
  (
    state: JsonFormsCore,
    action: CoreActions,
    defaultReducer: (state: JsonFormsCore, action: CoreActions) => JsonFormsCore
  ): JsonFormsCore;
}
