import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { createuser } from "../store/userSlice";

function About() {
  const [isValue, setValue] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Name"
      />
      <button onClick={() => dispatch(createuser(isValue))}>Submit</button>
      <FontAwesomeIcon icon={faUser} />
    </>
  );
}

export default About;
