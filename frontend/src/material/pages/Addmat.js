import React from "react";
import axios from "axios";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const Addmat = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      subject: {
        value: "",
        isValid: false,
      },
      content: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:5000/addmat",
        JSON.stringify({
          title: formState.inputs.title.value,
          subject: formState.inputs.subject.value,
          content: formState.inputs.content.value,
        })
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(formState.inputs);
    // send this to the backend!
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="subject"
        element="textarea"
        label="Subject"
        errorText="Please enter a valid Subject (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="content"
        element="input"
        label="Content"
        errorText="Type Content"
        onInput={inputHandler}
      />
      <Button type="submit">Upload</Button>
    </form>
  );
};

export default Addmat;
