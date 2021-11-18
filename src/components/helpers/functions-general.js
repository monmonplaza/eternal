//export const devApiUrl = "http://localhost/fcasmis-reactjs/rest";
// export const devApiUrl = "https://app.fca.edu.ph/rest";

// Copyright year
export const copyrightYear = () => {
  return new Date().getFullYear();
};

// get today date
export const getTodayDate = () => {
  var today = new Date();

  return (
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2)
  );
};

// get school year
export const getSchoolYear = () => {
  const d = new Date();
  const year1 = d.getFullYear();
  const year2 = d.getFullYear() + 1;

  return `${year1}-${year2}`;
};

// accept only numbers
export const handleNumOnly = (e) => {
  if (e.charCode < 48 || e.charCode > 57) {
    e.preventDefault();
  }
};

// do load more
export const doLoadmore = (data, setResult) => {
  if (data.data === null || !data.status) {
    setResult([]);
  } else {
    setResult((prevState) => [...prevState, ...data.data]);
  }
};

// do list
export const doList = (data, setResult) => {
  if (data.data === null || !data.status) {
    setResult([]);
  } else {
    setResult(data.data);
  }
};

// get the url id parameter
export const getUrlParam = (id) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // const param = urlParams.get(id);
  // return param;
  return urlParams;
};
