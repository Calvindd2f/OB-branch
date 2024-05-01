import { INIT, UPDATE_DATA } from '@jsonforms/core';

export const ControlledStyle = () => {
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState({ activity: 'Snowboarding' });

  const validateActivity = useCallback((data) => {
    switch (data.activity) {
      case 'Snowboarding':
        setErrors([
          {
            instancePath: '/activity',
            message: 'No Snow',
            schemaPath: '#/properties/activity',
          },
        ]);
        break;
      case 'Soccer':
        setErrors([
          {
            instancePath: '/activity',
            message: 'Too Cold',
            schemaPath: '#/properties/activity',
          },
        ]);
        break;
      default:
        setErrors([]);
    }
  }, []);

  const middleware = useCallback(
    (state, action, defaultReducer) => {
      const newState = defaultReducer(state, action);
      switch (action.type) {
        case INIT:
        case UPDATE_DATA: {
          setData(newState.data);
          validateActivity(newState.data);
          return state;
        }
        default:
          return newState;
      }
    },[]
  );

  return (
    <JsonForms
      data={data}
      schema={schema}
      renderers={materialRenderers}
      middleware={middleware}
      additionalErrors={errors}
      validationMode='NoValidation'
    />
  );
};

<ControlledStyle />
