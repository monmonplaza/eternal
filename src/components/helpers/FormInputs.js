import React from "react";

import { useField } from "formik";


export const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
    
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
    
      <input
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
      
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};
