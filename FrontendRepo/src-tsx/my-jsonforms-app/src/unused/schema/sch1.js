const personSchema = schema.person;
const personUISchema = {
  type: 'Group',
  label: 'Person',
  elements: [
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/firstName',
        },
        {
          type: 'Control',
          scope: '#/properties/lastName',
        },
      ],
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/age',
        },
        {
          type: 'Control',
          label: 'Address',
          scope: '#/properties/shippingAddress',
        },
      ],
    },
  ],
};

const addressSchema = schema.address;
const addressUISchema = {
      type: 'Group',
      label: 'Address',
      elements: [
        {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/addressId',
            },
            {
              type: 'Control',
              scope: '#/properties/street',
            },
          ],
        },
        {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/city',
            },
            {
              type: 'Control',
              scope: '#/properties/zipCode',
            },
          ],
        },
      ],
    };

const IndependentForms = () => {
  const [person, setPerson] = useState({});
  const [address, setAddress] = useState({});

  return (
    <div>
      <JsonForms
        data={person}
        onChange={({ errors, data }) => setPerson(data)}
        schema={personSchema}
        uischema={personUISchema}
        renderers={materialRenderers}
      />
      <JsonForms
        data={address}
        onChange={({ errors, data }) => setAddress(data)}
        schema={addressSchema}
        uischema={addressUISchema}
        renderers={materialRenderers}
      />
    </div>
  );
};

