import React, { useState, useEffect, useMemo, useContext } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { GrFormAdd } from "react-icons/gr";
import { COLUMNS } from "./columns";
import ModalAddClient from "./modal/ModalAddClient";
//import axios from "axios";
// import MOCK_DATA from "./MOCK_DATA.json";
import useLoadAll from "../custom-hook/useLoadAll";
import { StoreContext } from "../../store/StoreContext";
import { setIsAdd } from "../../store/StoreAction";
import Search from "../search/Search";
const ClientTable = () => {
  const [itemEdit, setItemEdit] = React.useState(null);

  const { loading, result } = useLoadAll("/admin/client/read-clients.php");
  const { store, dispatch } = useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(false);
  };

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => result, [loading]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  return (
    <>
      <div className="table">
        <div className="table__head">
          <h2>Client List </h2>
          <button className="btn btn--primary" onClick={handleAdd}>
            <GrFormAdd /> Add
          </button>
        </div>

        <div className="table__wrapper">
          {loading ? (
            <p>Loading Please wait...</p>
          ) : (
            <>
              <Search filter={globalFilter} setFilter={setGlobalFilter} />
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
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div>
                <span>
                  Page
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>
                </span>
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {store.isAdd && <ModalAddClient item={{ itemEdit, setItemEdit }} />}
    </>
  );
};

export default ClientTable;
