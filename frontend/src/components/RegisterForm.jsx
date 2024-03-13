"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import Button from "./Button";
import FormHeader from "./FormHeader";
import IconsBar from "./IconsBar";

export default function RegisterForm() {
  {
    /** form validation */
  }
  const formik = useFormik({
    initialValues: {
      firstname: "",
      surname: "",
      phone: "",
      password: "",
      confirmpassword: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      phone: Yup.string().min(8, "enter atleast eight digits"),
      password: Yup.string()
        .min(8, "password should have atleast 8 characters")
        .required("Required"),
      confirmpassword: Yup.string()
        .min(8, "password should have atleast 8 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-y-12 items-center justify-center"
        >
          <FormHeader className="mt-12" text={"Sign in to continue"} />
            <div className="grid grid-cols-2 gap-y-12 gap-x-4">
            <div>
            <Input              
              id="firstname"
              name="firstname"
              type="text"
              placeholder="firstname"
              className="w-48"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <span className="text-sm font-light text-red-500">
                {formik.errors.firstname}
              </span>
            ) : null}
          </div>
          <div>
            <Input
              id="surname"
              name="surname"
              type="text"
              placeholder="surname"
              className="w-48"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
            />
            {formik.touched.surname && formik.errors.surname ? (
              <span className="text-sm font-light text-red-500">
                {formik.errors.surname}
              </span>
            ) : null}
          </div>

          <div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email"
              className="w-48"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-sm font-light text-red-500">
                {formik.errors.email}
              </span>
            ) : null}
          </div>
          <div>
            <Input
              id="phone"
              name="phone"
              type="number"
              placeholder="phone"
              className="w-48"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <span className="text-sm font-light text-red-500">
                {formik.errors.phone}
              </span>
            ) : null}
          </div>

          <div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              className="w-48"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <div className="flex gap-x-4">
              {formik.touched.password && formik.errors.password ? (
                <span className="text-sm font-light text-red-600">
                  {formik.errors.password}
                </span>
              ) : null}
            </div>
          </div>
          <div>
            <Input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              placeholder="confirmpassword"
              className="w-48"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpassword}
            />
            <div className="flex gap-x-4">
              {formik.touched.confirmpassword &&
              formik.errors.confirmpassword ? (
                <span className="text-sm font-light text-red-600">
                  {formik.errors.confirmpassword}
                </span>
              ) : null}
            </div>
          </div>
            </div>
          <IconsBar />
          <Button text={"Sign up"} /> 
        </form>
      </div>
    </>
  );
}
