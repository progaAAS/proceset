import React from 'react';
import s from "./ProcessItem.module.css";
import { ReactComponent as Ring } from "../../../img/ring.svg";
import { ReactComponent as Time } from "../../../img/time.svg";
import { ReactComponent as TimeActive } from "../../../img/timeActive.svg";
import { ReactComponent as People } from "../../../img/people.svg";
import { ReactComponent as Script } from "../../../img/script.svg";

const ProcessItem = (props) => {

const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  const getDDMMYYYY = (msec) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const d = new Date(Number(msec));

    return d.toLocaleDateString("ru", options).slice(0, -3);
  };

  const msToTime = (msec) => {
    let milliseconds = parseInt((msec % 1000) / 100);
    let seconds = Math.floor((msec / 1000) % 60);
    let minutes = Math.floor((msec / (1000 * 60)) % 60);
    let hours = Math.floor((msec / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return (
      `${hours === 0 ? "" : hours}` +
      " " +
      `${hours === 0 ? "" : "ч"}` +
      " " +
      minutes +
      "" +
      " " +
      "мин"
    );
  };
    const process = props.processData;
    const ALT = msToTime(process.averageLeadTime);
    const AAT = msToTime(process.averageActiveTime);
    const percent = process.averageActiveTime / (process.averageLeadTime / 100);

   return ( 
          <div className={s.block}>  
            <div className={s.block__form}>
                <div className={s.block__header}>
                    <div className={s.block__name}>{props.processData.name}</div>
                    <div className={s.block__map}><p>На карту процесса ></p></div>
                </div>
                <div className={s.block__data}>
                    <div className={s.block__firstData}>
                        <Ring className={s.icon} />
                        <span className={s.block__firstNumb}>
                            {props.processData.numberOfExecutions}
                        </span>
                        <p className={s.block__underNumb}>выполнено раз</p>
                    </div>
                    <div className={s.block__secondData}>
                        <div className={s.block__block1}>
                            <Time className={s.icon} />
                            <span className={s.block__numb}>{ALT}</span>
                            <p className={s.block__underNumb}>среднее время выполнения</p>
                        </div>
                    
                        <div className={s.block__block2}>
                            <span className={s.block__numb}>
                                <TimeActive className={s.icon} />
                                {AAT} ({percent.toFixed(1) + " " + "%"})
                            </span>
                            <p className={s.block__underNumb}>среднее активное время</p>
                        </div>
                    </div>

                    <div className={s.block__secondData}>
                        <div>
                            <span className={s.numb}>
                            <People className={s.icon} />
                            {props.processData.employeesInvolvedProcess}{" "}
                            {declOfNum(props.processData.employeesInvolvedProcess, [
                                "сотрудников",
                                "сотрудника",
                                "сотрудников",
                            ])}
                            </span>
                            <p className={s.block__underNumb}>учавствует в процессе</p>
                        </div>
                        <div className={s.block2}>
                            <Script className={s.icon} />
                            <span className={s.numb}>
                            {props.processData.numberOfScenarios}{" "}
                            {declOfNum(props.processData.employeesInvolvedProcess, [
                                "сценария",
                                "сценария",
                                "сценариев",
                            ])}
                            </span>
                            <p className={s.block__underNumb}>в процессе</p>
                        </div>
                    </div>
                    <div className={s.block__procesTime}>
                        <div className={s.block__time}>
                            <span className={s.block__underNumb}>Начало</span>
                            <span> {getDDMMYYYY(props.processData.start)}</span>
                        </div>
                        <div className={s.block__time}>
                            <span className={s.block__underNumb}>Окончание</span>
                            <span> {getDDMMYYYY(props.processData.end)}</span>
                        </div>
                        <div className={s.block__time}>
                            <span className={s.block__underNumb}>Загрузка</span>
                            <span> {getDDMMYYYY(props.processData.loading)}</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          )
        }
export default ProcessItem;