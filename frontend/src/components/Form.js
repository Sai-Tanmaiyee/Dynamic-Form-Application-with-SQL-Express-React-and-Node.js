import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useParams } from "react-router-dom";
import '../App.css'

function Form() {
  const { formType } = useParams();
  const methods = useForm();
  const { register, control, handleSubmit, formState, setValue, getValues } = methods;

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if(savedData) {
      const { username, countryCode, number } = savedData;
      setValue("username", username || "");
      setValue("countryCode", countryCode || "+91");
      setValue("number", number || "");
    }
  }, [getValues, setValue]);

  const onSubmit = async (data) => {
    console.log("submit", data);
    localStorage.setItem("formData", JSON.stringify(data));

    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    formData.append('formType', formType);
    fetch("https://script.google.com/macros/s/AKfycbxxaRDFVWyl1JlZAjxe6pNHK-BGGB4xUCzzYm3BBkfBzEqj6EIPjX1vOgl3JXuJf7vFDQ/exec"
      ,{
        method: 'POST',
        body:formData
      })


    try {
      const response = await fetch('http://localhost:3001/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formType,
          name: data.username,
          countryCode: data.countryCode,
          phoneNumber: data.number
        })
      });
      if (response.ok) {
        console.log('Form data saved!');
      } else {
        console.error('Error saving form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { errors } = formState;

  return (
      <div>
        <h1>FORM {formType} </h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="username">
            Name:
            <input
              placeholder="Enter Name"
              id="username"
              type="text"
              {...register("username", { required: true ,
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name can only contain alphabets"
                },
                minLength: {
                    value: 3,
                    message: "Name must be atleast 3 characters"
                }
              })}
            />
          </label>
            <p className="error">{errors.username?.message}</p>

          <div>
            <label htmlFor="countryCode">Country Code:</label>
            <select {...register("countryCode", { required: true            }
            )}>
              <option value="+91">+91</option>
              <option value="+52">+52</option>
            </select>
          </div>
          <p className="error">{errors.countryCode?.message}</p>

          <label htmlFor="number">
            Number:
            <input
              type="text"
              id="number"
              placeholder="Enter Phone Number"
              {...register("number", { required: true , 
                pattern: {
                    value: /^\d+$/,
                    message: "Invalid Phone number"
                },
                minLength: {
                    value: 10,
                    message: "Phone number must be 10 digits"
                },
                maxLength: {
                  value: 10,
                  message: "Name must not be over 10 digits"
              }
              }   
              )}
            />
          </label>
          <p className="error">{errors.number?.message}</p>

          <button type="submit">Submit</button>
        </form>
        <DevTool control={control} /> {/* Include the devtools */}
      </div>
  );
}

export default Form;
