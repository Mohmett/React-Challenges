import React from "react";
import { useForm } from "react-hook-form";

const UseFormExercise = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="shadow-xl rounded-xl mx-auto max-w-xl mt-10 p-6 flex flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 mb-4">
        <h1 className="font-bold text-2xl">Student Registration Form</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Student Name</label>
          <input
            type="text"
            className="bg-white border-2 rounded py-2 px-4"
            {...register("studentName", {
              required: "Student name is required",
            })}
          />
          {errors.studentName && (
            <p className="text-pink-500">{errors.studentName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="bg-white border-2 rounded py-2 px-4"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-pink-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Grade Level</label>
          <select
            name=""
            id=""
            className="bg-white border-2 rounded py-2 px-4"
            {...register("grade", { required: "Grade is required" })}
          >
            <option value="">Select Grade</option>
            <option value="grade 1">Grade 1</option>
            <option value="grade 2">Grade 2</option>
            <option value="grade 3">Grade 3</option>
          </select>
          {errors.grade && (
            <p className="text-pink-500">{errors.grade.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="font-bold text-xl">
            Interest Subjects
          </label>
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              value="Mathematics"
              className="bg-white border-2 rounded py-2 px-4 flex items-center"
              {...register("subjects", {validate:(value)=>value && value.length>0|| "Choose at least one subject" })}
            />
            <label htmlFor="">Mathematics</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              value="English"
              className="bg-white border-2 rounded py-2 px-4 flex items-center"
              {...register("subjects")}
            />
            <label htmlFor="">English</label>
          </div>
            <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              value="Somali"
              className="bg-white border-2 rounded py-2 px-4 flex items-center"
              {...register("subjects")}
            />
            <label htmlFor="">Somali</label>
          </div>
            {errors.subjects && (
            <p className="text-pink-500">{errors.subjects.message}</p>
          )}

        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-pink-500 cursor-pointer hover:bg-pink-600 rounded text-white font-semibold"
        >
          Register
        </button>

        <button className="py-2 px-4 border-2 border-pink-500 cursor-pointer hover:bg-gray-50 rounded text-gray-700 font-semibold" type="reset">Reset</button>
      </form>
    </div>
  );
};

export default UseFormExercise;
