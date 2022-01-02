import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";

const ClassItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.studentCount}{" "}
              {props.studentCount === 1 ? "Student" : "Students"}
            </h3>
            <h3>Subjects : {props.subjects}</h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default ClassItem;
