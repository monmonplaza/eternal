// import { setApiError, setApiErrorMessage } from "../../store/StoreAction";

// export const baseUrl = "https://fca.edu.ph/";

// export const sampleFetch = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   alert(JSON.stringify({}, null, 2));
// };

// export const fetchApi = (url, fd = {}, dispatch) => {
//   const data = fetch(url, {
//     method: "post",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(fd),
//   })
//     .then((res) => res.json())
//     .catch((error) => {
//       console.error(error + " api endpint error");
//       dispatch(setApiError(true));
//       dispatch(setApiErrorMessage(error.message + ": error on api endpoint."));
//     });
//   return data;
// };

// export const fetchFormData = (url, fd = {}, dispatch) => {
//   const data = fetch(url, {
//     method: "post",
//     body: fd,
//   })
//     .then((res) => res.json())
//     .catch((error) => {
//       console.error(error + " api endpint error");
//       dispatch(setApiError(true));
//       dispatch(setApiErrorMessage(error.message + ": error on api endpoint."));
//     });
//   return data;
// };

// export const uploadPhoto = async (photo, dispatch) => {
//   if (photo) {
//     const fd = new FormData();
//     fd.append("photo", photo);

//     const data = await fetchFormData(
//       baseUrl + "rest/admin/employee-personal/upload-photo.php",
//       fd,
//       dispatch
//     );

//     console.log(data);
//   }
// };

// export const checkApiError = (job, dispatch) => {
//   // dispatch(setApiError(true));
//   dispatch(setApiErrorMessage(job.message));
// };

// export const numberWithCommas = (x) => {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };

// export const handleKey = (e) => {
//   if (e.charCode < 48 || e.charCode > 57) {
//     e.preventDefault();
//   }
// };

// export const getUrlParam = (id) => {
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const param = urlParams.get(id);
//   return param;
// };

// export function setStorageRoute(jwt, data) {
//   localStorage.setItem("smistoken", JSON.stringify({ token: jwt, data }));
// }

// export function setValidStorage() {
//   const valid = Math.random().toString(36).substring(5);
//   localStorage.setItem("sv", valid);
// }

// export const isCapsLock = (e) => {
//   if (e.getModifierState("CapsLock")) {
//     return true;
//   }
//   return false;
// };

// // Sample state with previous values
// /*
//     example 1
//     const [viewDonors, setViewDonors] = React.useState({
//       view: false,
//       product: "",
//       meta: "",
//     });

//     setViewDonors((prevState) => {
//       return {
//         ...prevState,
//         view: true,
//         product: item.id,
//         meta: item.metadata,
//       };
//     });

//     example 2
//     const [totalCus, setTotalCus] = React.useState([]);
//     setTotalCus((prevState) => [...prevState, item]);

//     // philippine-regions-provinces-cities-municipalities-barangays
//     // https://github.com/flores-jacob/philippine-regions-provinces-cities-municipalities-barangays

//     https://raw.githubusercontent.com/flores-jacob/philippine-regions-provinces-cities-municipalities-barangays/master/philippine_provinces_cities_municipalities_and_barangays_2019v2.json
//     https://restcountries.eu/rest/v2/all
// */
