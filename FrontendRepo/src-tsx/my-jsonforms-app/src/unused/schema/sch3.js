const schema = {
  type: 'object',
  properties: {
    person: {
      title: 'Person',
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        age: {
          description: 'Age in years',
          type: 'integer',
          minimum: 0,
        },
        shippingAddress: {
          $ref: '#/properties/address/properties/addressId',
        },
      },
      required: ['firstName', 'lastName'],
    },
    address: {
      title: 'Order',
      type: 'object',
      properties: {
        addressId: {
          type: 'string',
          label: 'Address Type',
          enum: ['Home Address 1', 'Home Address 2', 'Workplace'],
        },
        street: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        zipCode: {
          type: 'string',
        },
      },
    },
  },
};

const uischema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Group',
      label: 'Person',
      elements: [
        {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/person/properties/firstName',
            },
            {
              type: 'Control',
              scope: '#/properties/person/properties/lastName',
            },
          ],
        },
        {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/person/properties/age',
            },
            {
              type: 'Control',
              label: 'Address',
              scope: '#/properties/person/properties/shippingAddress',
            },
          ],
        },
      ],
    },
    {
      type: 'Group',
      label: 'Address',
      elements: [
        {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/person/properties/shippingAddress',
            },
            {
              type: 'Control',
              scope: '#/properties/address/properties/street',
            },
          ],
        },
        {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/address/properties/city',
            },
            {
              type: 'Control',
              scope: '#/properties/address/properties/zipCode',
            },
          ],
        },
      ],
    },
  ],
};

const InterLinkedForms = () => {
  const [data, setData] = useState({});

  return (
    <JsonForms
      data={data}
      onChange={({ errors, data }) => setData(data)}
      schema={schema}
      uischema={uischema}
      renderers={materialRenderers}
    />
  );
};
