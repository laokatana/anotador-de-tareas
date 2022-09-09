import { uniqueDates, orderDates } from "../services/date.js";
import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";

// con esta funcion vamos a leer lo que tenemos en localStorage
export const displayTask = () => {
  const list = document.querySelector(" [data-list] ");
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const date = uniqueDates(taskList);
  orderDates(date);

  date.forEach((date) => {
    const dateMoment = moment(date, "DD/MM/YYYY");

    list.appendChild(dateElement(date));
    taskList.forEach((task) => {
      const taskDate = moment(task.dateFormat, "DD/MM/YYYY");

      const diff = dateMoment.diff(taskDate);

      if (diff === 0) {
        list.appendChild(createTask(task));
      }
    });
  });
};
