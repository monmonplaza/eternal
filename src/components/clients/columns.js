export const COLUMNS = [
  {
    Header: "First Name",
    accessor: "client_firstname",
  },

  {
    Header: "Last Name",
    accessor: "client_lastname",
  },

  {
    Header: "Mobile",
    accessor: "client_mobile",
  },

  {
    Header: "Email",
    accessor: "client_email",
  },

  {
    Header: "Action",
    accessor: "accessor",
    Cell: ({ row: { original } }) => (
      <div>
        <button
          onClick={() => {
            dispatch(setIsAdd(true));
            setRecord(record);
          }}
        >
          Edit
        </button>
      </div>
    ),
  },
];
