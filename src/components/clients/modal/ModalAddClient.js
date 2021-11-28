import React from "react";
import { GrFormClose } from "react-icons/gr";
import { HiOutlineDocumentText } from "react-icons/hi";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { fetchData } from "../../helpers/fetchData";
import { InputSelect, InputText } from "../../helpers/FormInputs";
import { StoreContext } from "../../../store/StoreContext";
import SpinnerButton from "../../spinner/SpinnerButton";
import { setIsAdd } from "../../../store/StoreAction";

const ModalAddClient = ({ item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const { itemEdit, setItemEdit } = item;

  const handleClose = () => {
    dispatch(setIsAdd(false));
    setItemEdit(false);
  };

  const initVal = {
    client_firstname: itemEdit ? itemEdit.client_firstname : "",
    client_lastname: itemEdit ? itemEdit.client_lastname : "",
    client_mobile: itemEdit ? itemEdit.client_mobile : "",
    client_address: itemEdit ? itemEdit.client_address : "",
    client_email: itemEdit ? itemEdit.client_email : "",
  };

  //kung require, dapat nasa yupSchema
  const yupSchema = Yup.object({
    // role_name: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="modal modal--form ">
        <div className="modal__main ">
          <div className="modal__header bg--green">
            <h4>
              <HiOutlineDocumentText />
              <span>{itemEdit ? "Edit Role Level" : "Add Role Level"}</span>
            </h4>
            <button onClick={handleClose}>
              <GrFormClose />
            </button>
          </div>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            // value = initVal = state
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              console.log(values);
              fetchData(
                setLoading,
                itemEdit
                  ? "/admin/client/update-clients.php"
                  : "/admin/client/create-clients.php",
                values, // form data values
                null, // result set data
                "", // success msg
                "Role aleady exist.", // additional error msg if needed
                dispatch, // context api action
                store, // context api state
                false, // boolean to show success modal
                false // boolean to show load more functionality button
              );
              // setItemEdit(false); //PARA MARESET YUN MODAL FORM
            }}
          >
            {(props) => {
              // console.log(props.isSubmitting);

              return (
                <Form>
                  <div className="modal__body modal--short">
                    <div className="form-group">
                      <InputText
                        label="First Name"
                        type="text"
                        name="client_firstname"
                        disabled={loading}
                      />
                    </div>

                    <div className="form-group">
                      <InputText
                        label="Last Name"
                        type="text"
                        name="client_lastname"
                        disabled={loading}
                      />
                    </div>

                    <div className="form-group">
                      <InputText
                        label="Mobile"
                        type="text"
                        name="client_mobile"
                        disabled={loading}
                      />
                    </div>

                    <div className="form-group">
                      <InputText
                        label="Email"
                        type="text"
                        name="client_email"
                        disabled={loading}
                      />
                    </div>

                    <div className="form-group">
                      <InputText
                        label="Address"
                        type="text"
                        name="client_address"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="modal__footer">
                    <ul>
                      <li>
                        <button
                          className="btn btn--green"
                          type="submit"
                          disabled={loading}
                        >
                          {itemEdit ? "Update" : "Add"}
                          {loading && <SpinnerButton />}
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn btn--gray"
                          type="reset"
                          onClick={handleClose}
                        >
                          Cancel
                        </button>
                      </li>
                    </ul>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ModalAddClient;
