import { JsonFormsCore } from '@jsonforms/core';

export interface UserDetails {
    firstName: string;
    lastName: string;
    age: number;
}

export const userDetailsSchema: JsonFormsCore = {
    JsonSchema: {
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
    }
};


/*
report from GP
PI
10k + 2720 w/ tax stdrd ±
*/
