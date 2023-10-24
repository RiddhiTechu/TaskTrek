import React from "react";
import Tag from "./Tag.jsx";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ key, name, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text"> {name} </p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} selected />
          ))}
        </div>

        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="bin" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
