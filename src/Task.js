import React from "react";
import differenceInDays from 'date-fns/differenceInDays'
const Task = ({ taskObj, onComplete }) => {

  const timeLeft = differenceInDays(new Date(taskObj.deadline), new Date())
 const timer = (timeLeft) =>{
  if (timeLeft < 0){
    return ` ${Math.abs(timeLeft)} gün önce`
  }
  else if (timeLeft) {
    return `${timeLeft} gün sonra`
  }

 }
  return (
    <div className=" p-1 bg-white rounded-lg leading-6 my-4  shadow-md">
      <h3 className="text-orange-600 text-lg">{taskObj.title}</h3>
      <div className="deadline">son teslim: <span className={timeLeft<3 ? "normal" : "urgent"}> {timer(timeLeft)}</span></div>
      <p className="p-2 text-md text-444-600">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-1 px-1.5 text-md border-solid border-2 border-gray-300  rounded-full mr-1 mb-1.5 " key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
