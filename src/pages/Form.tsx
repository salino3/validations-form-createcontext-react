import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalData, Users } from "../context";

export interface FormData {
  name: string;
  email: string;
};

export const Form: React.FC = () => {
  const { state } = React.useContext(GlobalData);

  const { Users } = state;
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
  });

  const [errorForm, setErrorForm] = React.useState<FormData>({
    name: "E",
    email: "E",
  });

  const validateField = (field: keyof FormData, value: FormData) => {
    if (value[field].length > 25 || value[field].length < 5) {
      return {
        ...errorForm,
        [field]: "Error - Text must be between 5 and 25 characters",
      };
    } else if (/\d/.test(value["name"])) {
      return {
        ...errorForm,
        ["name"]: "Error - Numbers are not allowed",
      };
    } else if (!/^[A-Za-z0-9\s]+$/.test(value["name"])) {
      return {
        ...errorForm,
        ["name"]: "Error - Special characters are not allowed",
      };
    } else if (
      (value.email !== "E" || "") &&
      (!value["email"].includes("@") ||
        (!value["email"].includes(".com") && !value["email"].includes(".es")))
    ) {
      return {
        ...errorForm,
        ["email"]: "Error - Email need symbol '@' and '.com' or '.es'",
      };
    } else {
      return {
        ...errorForm,
        [field]: "E",
      };
    }
  };

  //
  const handleChange =
    (field: keyof FormData): React.ChangeEventHandler<HTMLInputElement> =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setErrorForm(
        validateField(field, { ...errorForm, [field]: event.target.value })
      );

      setFormData({
        ...formData,
        [field]: event.target.value,
      });
    };

//
  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement> ) => { 
     event.preventDefault();

    const checkUserEmail = Users.find((user: Users) => user.email === formData.email);

    const checkUserName = Users.find((user: Users) => user.name === formData.name);

    //
    if (
      checkUserEmail === checkUserName && checkUserName?.email !== undefined)
       {
      navigate(`/info/${checkUserName?.id}`);
    } else {
      alert("Sorry the password or the email it's incorrect");
    }
  };

  return (
    <>
      <h1>
        <u>Home</u>
      </h1>
      <Link to={"/"}>Go back</Link>
      <br /> <br />
      <form id="FormHome" className="generalDivCss" onSubmit={handleSubmit}>
        <h2>Login form</h2>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          type="text"
          required
          className={errorForm.name.length > 2 ? "inputErr" : "inputGreen"}
          value={formData.name}
          onChange={handleChange("name")}
        />{" "}
        <br />
        <div className={errorForm.name.length > 2 ? "dError" : "dErrorHidden"}>
          <b>{errorForm.name}</b>
        </div>
        <br />
        <label htmlFor="name">Email: </label>
        <input
          name="email"
          type="email"
          required
          className={errorForm.email.length > 2 ? "inputErr" : "inputGreen"}
          value={formData.email}
          onChange={handleChange("email")}
        />
        <div className={errorForm.email.length > 2 ? "dError" : "dErrorHidden"}>
          <b>{errorForm.email}</b>
        </div>
        <br />
        <button
          type="submit"
          disabled={formData.email && formData.name ? false : true}
        >
          Submit
        </button>
      </form>
    </>
  );
};
