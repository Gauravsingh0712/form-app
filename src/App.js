import React, { useState } from "react";

const App = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstHandler(event) {
  //   console.log("printing first name");
  //   console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeLastHandler(event) {
  //   console.log("printing last name");
  //   console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
  });

  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br />

        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br />

        <input
          type="text"
          placeholder="email address"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />
        <textarea
          placeholder="enter your comments here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I visible</label>

        <br />

        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Online-mode"
          id="Online-mode"
          checked={formData.mode === "Online-mode"}
        />
        <label htmlFor="Online-mode">Online Mode</label>

        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Offline-mode"
          id="Offline-mode"
          checked={formData.mode === "Offline-mode"}
        />
        <label htmlFor="Offline-mode">Offline Mode</label>
      </form>
    </div>
  );
};

export default App;
