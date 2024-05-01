import React, { useState } from 'react';
    import { JsonForms } from '@jsonforms/react';
    import { JsonFormsCore, JsonSchema } from '@jsonforms/core';
    import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import chatSlice from '../../../src/frontendrepo/src/features/chat/chatSlice';

    interface DynamicFormProps {
    schema: JsonFormsCore.JsonSchema.chatSlice;
    uischema: any;
    }

    const DynamicForm: React.FC<DynamicFormProps> = ({ schema, uischema }) => {
    const [formData, setFormData] = useState({});

    return (
        <div>
        <JsonForms
            schema={schema}
            uischema={uischema}
            data={formData}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ data }: JsonFormsCore.OnChangeProps) => setFormData(data)}
        />
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
    );
    };

    export default DynamicForm;
