"use client";
import React, { useState } from "react";
import { Field, useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import FormHeader from "./FormHeader";
import { useRouter } from "next/navigation";
import TopicsTabs from "./TopicsTabs";
import { toast } from "sonner";

export default function ProfileForm( {formData}) {
  const { email}= formData
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      job: "",
      location: "",
      role:"",
      topic:"",
    },
    validationSchema: Yup.object({
      job: Yup.string().required("This field is required"),
      location: Yup.string().required("This field is required"),
      role: Yup.string().required("This field is required")
    }),
    onSubmit: async (values) => {
      try {
      
        values['email'] = email
        console.log(values)

        toast.success("you have successfully logged in ")
        router.push("/home");
      } catch (error) {
        alert(`the was an ${error} submitting the form`);
      }
    },
  });

  //state to toggle topics according to role 
  const [isMentor,setIsMentor] = useState(false)
  const Regions = ["Mwanza","Dar es Salaam","Iringa","Mbeya", "Tanga","Arusha","Ruvuma","Morogoro","Lindi","Mtwara","Pwani","Katavi","Dodoma",]
  const showTopics = ()=>{
    setIsMentor(!isMentor)
  }
  return (
    <div>
      <FormHeader text="Complete your profile" style="text-center mt-8 mb-12" />
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-12">
        <div className="flex gap-x-2">
          <div className="grid grid-cols-1">
            <div className="font-bold text-white text-lg text-nowrap">
              What is your main job?
            </div>
            <div className="font-light text-sm text-white text-nowrap">
              A job to display on your profile
            </div>
          </div>
          <div>
            <input
              type="text"
              name="job"
              id="job"
              className="border-b outline-none bg-white text-black"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.job}
            />
             {formik.touched.job && formik.errors.job? (
              <span className="text-sm font-light text-red-500">
                {formik.errors.job}
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="grid grid-cols-1">
            <div className="font-bold text-white text-lg text-nowrap">
              Where are you located?
            </div>
            <div className="font-light text-xs text-white text-wrap">
              This will help you link up with
              <br />
              entrepreneurs near you
            </div>
          </div>
          <div>
            <select 
                name="location" 
                id="location" 
                className="border-b outline-none bg-white w-full " 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
            >
             
              {/* Display regions as select options */}
              <option 
                  className=""
                  value=''
                  selected
                  disabled
                  >
                    
                  </option>
              {Regions.map(
                (region,index)=>(
                  <option 
                  className=""
                  key={index}
                  value={region}
                  >
                    {region}
                  </option>
                )
              )}
            </select>
             {formik.touched.location && formik.errors.location? (
              <span className="text-sm font-light text-red-500">
                {formik.errors.location}
              </span>
            ) : null}
          </div>
        </div>
          
        <div className="flex gap-x-4">         
          <input 
          type="radio" 
          name="role"         
          id="role"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={isMentor ? "Mentor": "Entrepeneur"}

          onClick={showTopics}
           />
           <label htmlFor="role" className="text-white">Yes, I am mentor and I would like to coach on:</label>

           {formik.touched.role && formik.errors.role? (
              <span className="text-sm font-light text-red-500">
                {formik.errors.role}
              </span>
            ) : null}
        </div>
          {
            isMentor?
            (
            <select
            name="topic" 
            id="topic" 
            className="border-b outline-none bg-white w-full " 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.topic}  
            >
               <option  value="Agriculture">Agriculture</option>
               <option  value="Bakery">Bakery</option>
               <option  value="Fishery">Fishery</option>
               <option  value="Forex">Forex</option>
               <option  value="Beekeeping">Beekeeping</option>
               <option  value="Textile production">Textile production</option>
               <option  value="Soap Making">Soap Making</option>
            </select>):
            (null)
          }  
          
          {formik.touched.topic && formik.errors.topic? (
              <span className="text-sm font-light text-red-500">
                {formik.errors.topic}
              </span>
            ) : null}     1
        <Button type="submit" aria-label="continue" text={'continue'} />
        </form>
    </div>
  );
}
