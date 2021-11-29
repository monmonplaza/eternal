import React from "react";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const Pagination = ({ navigation }) => {
  const {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageIndex,
  } = navigation;
  return (
    <>
      <div className="table__pagination">
        <div className="page__indicator">
          Page: {pageIndex + 1} of {pageOptions.length}
        </div>
        <ul className="page__navigation">
          <li>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <RiArrowLeftSFill />
            </button>
          </li>

          <li>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <RiArrowRightSFill />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
