import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from "@/components/ui/input"

export default function page() {

  const formik = useFormik({
    initialValues:{
        email: '',
        password:'',
     
    },
    validationSchema:Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password:Yup.string().required('Required').min(8,'the password must contain atleast eight charactersd')
    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })
  return (
   <form action="">
      
       <Input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}

    <Input
       id="password"
       name="password"
       type="password"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.password}
       
       />
        {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}

   </form>
  )
}
