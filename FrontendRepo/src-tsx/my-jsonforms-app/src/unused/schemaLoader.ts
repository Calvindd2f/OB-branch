
// Define interface for component props
interface SchemaLoaderProps {
  formType: keyof typeof schemaCache;
}

// Use object literal to cache imported schemas
const schemaCache = {
  userDetails: { schema: import('./schemas/userDetails/schema.json'),
                  uiSchema: import('./schemas/userDetails/uiSchema.json') },
  userAddress: { schema: import('./schemas/userAddress/schema.json'),
                  uiSchema: import('./schemas/userAddress/uiSchema.json') },
  // Add more schemas as needed
};

// Function to access schemas from cache
export const loadSchema = async ({ formType }: SchemaLoaderProps) => {
  const { schema, uiSchema } = schemaCache[formType];
  return { schema: await schema, uiSchema: await uiSchema };
};

