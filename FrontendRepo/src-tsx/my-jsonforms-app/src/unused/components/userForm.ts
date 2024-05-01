import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { JsonSchema } from '@jsonforms/core';
import userSchema from './userSchema.json';
import userUiSchema from './userUiSchema.json';

interface UserFormProps {}

const UserForm: React.FC<UserFormProps> = () => {
    const [formData, setFormData] = useState<object>({});

    const handleChange = ({ data }: { data: JsonSchema }) => {
        setFormData(data);
    };

    return (
        <div>
            <JsonForms
                schema={userSchema}
                uischema={userUiSchema}
                data={formData}
                renderers={materialRenderers}
                cells={materialCells}
                const onChange={handleChange}
            />
            <pre>{JSON.stringify(formData, null, 2)}</pre> {/* This line is for debugging to see the form data live */}
        </div>
    );
};

export default UserForm;

