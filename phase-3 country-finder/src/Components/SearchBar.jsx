import { useForm } from "react-hook-form";
import { useState } from "react";
function SearchBar({onSearch}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) =>{
    onSearch(data.CountryName) //this will go as input to onsearch function
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("CountryName", { required: true })}
        placeholder="CountryName"
      />

      {errors.username && <p>Username is required</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
export default SearchBar;