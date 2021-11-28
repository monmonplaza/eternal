import React, { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import axios from "axios";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";

const ClientTable = () => {
  const [clientlist, setClientlist] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://localhost/eternal/rest/admin/client/read-clients.php")
        .then((res) => {
          console.log(res.data.data);
          setClientlist(res.data.data);
          setLoadingData(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (loadingData) {
      //   // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div className="App">
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClientTable;
