import React from "react";
import { GrFormClose } from "react-icons/gr";
import { RiDeleteBin2Line, RiErrorWarningFill } from "react-icons/ri";
import { setIsConfirm, setStartIndex } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { fetchData } from "../helpers/fetchData";
import SpinnerButton from "../spinner/SpinnerButton";

const ModalYesNo = ({ id, endpoint, msg }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  console.log(id);
  const handleClose = () => {
    dispatch(setIsConfirm(false));
  };
  //   let aid = id;
  const handleYes = () => {
    id.map((item) => {
      //   console.log(item.original.client_aid);
      fetchData(
        setLoading,
        endpoint,
        { id: item.original.client_aid },
        null,
        "",
        "Server connection error. Please contact FBAS technical support.",
        dispatch,
        store,
        false,
        false
      );
    });
    dispatch(setStartIndex(0));
  };

  return (
    <>
      <div className="modal ">
        <div className="modal__main">
          <div className="modal__header bg--red">
            <h4>
              <RiDeleteBin2Line />
              Confirmation
            </h4>
            <button onClick={handleClose}>
              <GrFormClose />
            </button>
          </div>
          <div className="modal__body modal--prompt">
            <div className="prompt__wrapper warning">
              <RiErrorWarningFill />
              <p>{msg}</p>
            </div>
          </div>
          <div className="modal__footer">
            <ul>
              <li>
                <button
                  className="btn btn--red"
                  type="submit"
                  disabled={loading}
                  onClick={handleYes}
                >
                  Confirm
                  {loading && <SpinnerButton />}
                </button>
              </li>
              <li>
                <button className="btn btn--gray" onClick={handleClose}>
                  Cancel
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalYesNo;
