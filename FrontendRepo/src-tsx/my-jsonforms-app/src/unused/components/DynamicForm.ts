import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { JsonFormsCore } from '@jsonforms/core';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import App from '../../App';


interface DynamicFormProps {
schema:  any;
uischema: any;
}

    const DynamicForm: React.FC<DynamicFormProps> = ({ schema, uischema }) => {
    const [formData, setFormData] = useState({});

    return (
        <div>
        <JsonForms
            schema={schema}
            uischema={uischema}
            const data={formData}
            const renderers={materialRenderers}
            const cells={materialCells}
            onchange={({ data }: JsonFormsCore.OnChangeProps) => FormData(data)}
        />
    );
};

    export default DynamicForm;
