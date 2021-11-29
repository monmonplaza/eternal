import React, { useState, useEffect, useMemo, useContext } from "react";
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { GrFormAdd } from "react-icons/gr";
//import { COLUMNS } from "./columns";
import ModalAddClient from "./modal/ModalAddClient";
import useLoadAll from "../custom-hook/useLoadAll";
import { StoreContext } from "../../store/StoreContext";
import { setIsAdd, setIsConfirm } from "../../store/StoreAction";
import Search from "../search/Search";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { Checkbox } from "../checkbox/Checkbox";
import ModalYesNo from "../widget/ModalYesNo";
import Pagination from "../pagination/Pagination";
const ClientTable = () => {
  const [itemEdit, setItemEdit] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [record, setRecord] = React.useState(null);
  const { loading, result } = useLoadAll("/admin/client/read-clients.php");
  const { store, dispatch } = useContext(StoreContext);

  const cols = [
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
            className="btn--edit"
            onClick={() => {
              handleEdit(original);
            }}
          >
            <RiEdit2Line />
          </button>
        </div>
      ),
    },
  ];

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(false);
  };

  const handleEdit = (record) => {
    dispatch(setIsAdd(true));
    setRecord(record);
  };

  const handleDelete = (id) => {
    dispatch(setIsConfirm(true));
    setId(id);
  };

  const columns = useMemo(() => cols, []);
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
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  const { globalFilter, pageIndex } = state;

  return (
    <>
      <div className="table">
        <div className="table__head">
          <h2>Client List </h2>
          <button className="btn--add" onClick={handleAdd}>
            <GrFormAdd />
            <span> Add</span>
          </button>
        </div>

        <div className="table__wrapper">
          {loading ? (
            <p>Loading Please wait...</p>
          ) : (
            <>
              <div className="table__options">
                {selectedFlatRows[0] ? (
                  <ul>
                    <li>
                      <button
                        className="btn btn--red bg--red"
                        onClick={() => {
                          handleDelete(selectedFlatRows);
                        }}
                      >
                        <RiDeleteBin6Line />
                        {selectedFlatRows.length > 1 ? "Delete All" : "Delete"}
                      </button>
                    </li>
                  </ul>
                ) : (
                  <div></div>
                )}

                <Search filter={globalFilter} setFilter={setGlobalFilter} />
              </div>

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
              <Pagination
                navigation={{
                  nextPage,
                  previousPage,
                  canNextPage,
                  canPreviousPage,
                  pageOptions,
                  pageIndex,
                }}
              />
            </>
          )}
        </div>
      </div>

      {store.isAdd && (
        <ModalAddClient item={{ itemEdit, setItemEdit }} record={record} />
      )}
      {store.isConfirm && (
        <ModalYesNo
          id={id}
          endpoint={"/admin/client/delete-clients.php"}
          msg={"Are you sure you want to remove this record?"}
        />
      )}
    </>
  );
};

export default ClientTable;
