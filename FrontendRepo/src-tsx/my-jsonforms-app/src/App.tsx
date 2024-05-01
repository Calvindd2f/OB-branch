import React, { useMemo } from 'react';
import { JsonForms, JsonFormsInit } from '@jsonforms/react';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { person } from '@jsonforms/examples';

const schema = person.schema;

const App = () => {
  const init = useMemo(() => JsonFormsInit.init(schema, person.uischema, person.data, materialRenderers, materialCells), []);
  return <JsonForms {...init} />;
};

export default App;
