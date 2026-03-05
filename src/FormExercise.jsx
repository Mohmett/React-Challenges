import React, { useState } from "react";

const FormExercise = () => {
  const [formData, setFormData] = useState({
    username: "",
    mature: false,
    sex: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

 
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }


  return (
    <div className="p-10 bg-red-200 my-10 mx-auto">
      <form
        action=""
        onSubmit={handleSubmit}
        className="text-xl flex gap-4 items-center justify-center"
      >
        <input
          type="text"
          name="username"
          id=""
          placeholder="Enter Username"
          className="bg-white py-1 px-2"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="mature">Are You mature:</label>
        <input
          type="checkbox"
          checked={formData.mature}
          name="mature"
          id="mature"
          onChange={handleChange}
        />
        <select name="sex" id="" value={formData.sex}
          onChange={handleChange} >
          <option value="">Select Sex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button
          type="submit"
          className="bg-red-400 py-1 px-2 text-white text-xl font-medium"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default FormExercise;
