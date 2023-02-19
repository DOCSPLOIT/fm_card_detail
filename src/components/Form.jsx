import { useFormik } from "formik";
import React from "react";
import Input from "./Input";

export const Form = (props) => {
  const { formik } = props;
  return (
    <div className=" mt-72 mx-3 m-0 md:grow flex md:m-auto md:px-16 md:mx-12">
      <form
        onSubmit={formik.handleSubmit}
        className="  md:grow md:pr-16 md:mr-12"
      >
        <Input
          name="Card holder Name"
          error={
            formik.errors.name && formik.touched.name
              ? formik.errors.name
              : undefined
          }
          inputProps={{
            placeholder: "e.g. Jane Appleseed",
            name: "name",
            value: formik.values.name,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
          }}
        />
        <Input
          name="Card number"
          error={
            formik.errors.number && formik.touched.number
              ? formik.errors.number
              : undefined
          }
          inputProps={{
            placeholder: "e.g. 1234 5678 9123 000",
            name: "number",
            maxLength: "16",
            value: formik.values.number,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
          }}
        />
        <div className="flex mt-5 space-x-3">
          <div>
            <label className="uppercase text-xs my-3 tracking-wider">
              Exp. Date (MM/YY)
            </label>
            <div className="flex space-x-2 mt-3">
              <Input
                error={
                  formik.errors.mm && formik.touched.mm
                    ? formik.errors.mm
                    : undefined
                }
                className="mt-0"
                inputProps={{
                  placeholder: "MM",
                  className: "w-[5.3rem]",
                  name: "mm",
                  maxLength: "2",
                  value: formik.values.mm,
                  onChange: formik.handleChange,
                  onBlur: formik.handleBlur,
                }}
              />
              <Input
                className="mt-0"
                error={
                  formik.errors.yy && formik.touched.yy
                    ? formik.errors.yy
                    : undefined
                }
                inputProps={{
                  placeholder: "YY",
                  className: "w-[5.3rem] ",
                  name: "yy",
                  maxLength: "2",
                  value: formik.values.yy,
                  onChange: formik.handleChange,
                  onBlur: formik.handleBlur,
                }}
              />
            </div>
          </div>
          <div>
            <label className="uppercase text-xs py-5 tracking-wider">CVC</label>
            <Input
              error={
                formik.errors.cvc && formik.touched.cvc
                  ? formik.errors.cvc
                  : undefined
              }
              className="mt-3"
              inputProps={{
                className: "md:w-[12rem] w-[10rem]",
                placeholder: "e.g. 123",
                name: "cvc",
                maxLength: "3",
                value: formik.values.cvc,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
              }}
            />
          </div>
        </div>
        <button className="bg-[hsl(278,68%,11%)] px-6 py-4 my-6 font-bold rounded-md text-white w-full">
          Confirm
        </button>
      </form>
    </div>
  );
};
