import React from "react";

import UserItem from "./ClassItem";
import Card from "../../shared/components/UIElements/Card";
import "./UsersList.css";

const ClassList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No class found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((item) => (
        <UserItem
          key={item.id}
          id={item.id}
          name={item.name}
          studentCount={item.students}
          subjects={item.subjects}
        />
      ))}
    </ul>
  );
};

export default ClassList;
