import React from "react";
//import to para sa fields nng formik
import { useField } from "formik";

//gagawa ka nng component na paulit ulit mong gagamitin para mapaigsi yun file mo.
//dapat pg gagawa ka nng form input, may label, input at error message nasa loob nng form-group

// sasabot ang component na nng 2 props: para sa label at input
//
export const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* ito ang nasa loob nng form-group, htmlFor = maalin man sa name o id attr nng input ang gagamitin */}
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      {/* yun field sa formik yun, yun props lahat nng ipapasa mong attr sa loob nng input */}
      <input
        {...field}
        {...props}
        // conditional styling kung meron error o wala
        className={meta.touched && meta.error ? "error-show" : null}
      />
      {/* conditional styling kung meron error o wala, open and close lang nng error msg */}
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputFileUpload = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} className="file-upload" />

      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputSelect = ({ label, handleChangeSecSub, ...props }) => {
  const [field, meta] = useField(props);

  if (
    props.name === "classes_class_level_id" ||
    props.name === "students_grade_level" ||
    props.name === "subjects_class_level_id"
  ) {
    return (
      <>
        <label className="label" htmlFor={props.id || props.name}>
          {label}
        </label>
        <select
          {...field}
          {...props}
          className={meta.touched && meta.error ? "error-show" : null}
          onChange={(e) => {
            handleChangeSecSub(e);
            field.onChange(e);
          }}
        />

        {meta.touched && meta.error ? (
          <span className="error-msg error-show">{meta.error}</span>
        ) : null}
      </>
    );
  }

  return (
    <>
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
      />

      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
      ></textarea>
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

// OCT18 END

export const MyRadio = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        className={meta.touched && meta.error ? "error-show" : null}
        {...field}
        {...props}
      />
      <label htmlFor={props.id || props.name}>{label}</label>

      {/* {meta.touched && meta.error ? (
        <p className="error-msg">{meta.error}</p>
      ) : null} */}
    </>
  );
};

export const MyRadioError = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const MyCheckbox = ({ label, open, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
      />
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      {/* <span htmlFor={props.id || props.name}>{label}</span> */}
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};
