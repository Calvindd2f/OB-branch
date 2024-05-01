import { INIT, UPDATE_DATA } from  '@jsonforms/core'

...
const middleware = useCallback((state, action, defaultReducer) => {
  const newState = defaultReducer(state, action);
  switch (action.type) {
    case INIT:
    case UPDATE_CORE:
    case UPDATE_DATA: {
      if (newState.data.services.length * 15 !== newState.data.price) {
        newState.data.price = newState.data.services.length * 15;
      }
      return newState;
    }
    default:
      return newState;
  }
});

...

<JsonForms
  data={data}
  schema={schema}
  renderers={materialRenderers}
  middleware={middleware}
/>
