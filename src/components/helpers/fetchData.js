import fetchApi from "./fetchApi";

import { devApiUrl, doList, doLoadmore } from "./functions-general";

import {
  setSuccess,
  setMessage,
  setError,
  setSave,
  setIsConfirm,
  setIsAdd,
} from "../../store/StoreAction";

export const fetchData = async (
  //parameters
  setLoading,
  endpoint,
  fd,
  setResult,
  successMsg,
  errorMsg,
  dispatch,
  store,
  successModal,
  isLoadMore
) => {
  setLoading !== null && setLoading(true);

  const data = await fetchApi(devApiUrl + endpoint, fd, dispatch);
  console.log(data);

  if (setResult !== null) {
    if (data.data === null || !data.status) {
      setResult([]);
    } else {
      setResult(data.data);
      // dispatch(setResultSet(data.data));
    }
  }

  // isLoadMore && setResult !== null && doLoadmore(data, setResult);
  // !isLoadMore && setResult !== null && doList(data, setResult);

  if (typeof data === "undefined") {
    console.log("undefined");
    dispatch(setError(true));
    dispatch(setMessage("API / Network Error"));
    setLoading !== null && setLoading(false);
    return;
  }

  if (!data.status) {
    console.log(data.message);
    setLoading !== null && setLoading(false);
    // // add modal will be closed when used
    // if (store.isAdd) {
    //   dispatch(setIsAdd(false));
    // }
    dispatch(setError(true));
    dispatch(setMessage(errorMsg));
  }

  if (data.status) {
    console.log("Fetch success");
    setLoading !== null && setLoading(false);

    if (store.isAdd) {
      dispatch(setIsAdd(false));
      store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    }

    if (store.isConfirm) {
      dispatch(setIsConfirm(false));
      store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    }

    if (successModal) {
      dispatch(setSuccess(true));
      dispatch(setMessage(successMsg));
    }

    // // redirect to other pager
    // if (isPush) {
    //   dispatch(setSuccess(true));
    //   dispatch(setMessage(successMsg));
    // }
  }
};
