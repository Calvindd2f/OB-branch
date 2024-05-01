# Changing over to Typescript for maintainability and less debuigging error


## Steps to Introduce TypeScript

1. Add TypeScript to Your React Project
    If your project isn't already using TypeScript, you'll need to add it along with the types for React and Node:

    ```bash
    npm install --save typescript @types/node @types/react @types/react-dom @types/jest
    ```

2. Create a TypeScript Configuration File
    You can generate a basic tsconfig.json file by running the following command:

    ```bash
    npx tsc --init
    ```

    Adjust the generated tsconfig.json to suit your project's specific needs. Here’s a typical React configuration:

    ```json

    {
    "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
    },
    "include": ["src"]
    }
    ```

3. Convert Components to TypeScript
    Change your component files from `.js` to .tsx and define types for your props and state where necessary.

    Here’s how you might adjust the DynamicForm component to use TypeScript:

    **DynamicForm.tsx:**

    ```typescript
    import React, { useState } from 'react';
    import { JsonForms } from '@jsonforms/react';
    import { JsonFormsCore } from '@jsonforms/core';
    import { materialRenderers, materialCells } from '@jsonforms/material-renderers';

    interface DynamicFormProps {
    schema: JsonFormsCore.userDetailsSchema;
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
    ```

4. Create TypeScript Interfaces for JSON Schemas
    To leverage TypeScript's type safety with JSON Forms, define interfaces that describe the structure of your JSON schemas.

    Interfaces for User Details Schema (`UserDetails.ts`):

    ```typescript
    export interface UserDetails {
    firstName: string;
    lastName: string;
    age: number;
    }

    export const userDetailsSchema: JsonFormsCore.JsonSchema = {
    type: "object",
    properties: {
        firstName: {
        type: "string",
        title: "First Name"
        },
        lastName: {
        type: "string",
        title: "Last Name"
        },
        age: {
        type: "integer",
        title: "Age"
        }
    },
    required: ["firstName", "lastName"]
    };
    ```
