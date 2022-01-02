import React, { useEffect, useState } from "react";

import ClassList from "../components/ClassList";
import axios from "axios";

const Class = () => {
  const CLASSES = [
    {
      id: "u1",
      name: "BCS 6A",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhc3Nyb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      subjects: "Maths",
      students: 3,
    },
  ];
  const [loadedClasses, setloadedClasses] = useState(CLASSES);
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/class",
    })
      .then((response) => {
        console.log(response.data);
        setloadedClasses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return <ClassList items={loadedClasses} />;
};

export default Class;
