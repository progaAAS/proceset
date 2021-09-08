import React from 'react';
import s from "./ListProcess.module.css";
import { useSelector } from 'react-redux';
import { map } from "lodash";
import ProcessItem from './ProcessItem/ProcessItem';
import processList from "./../../query/process";
import {useQuery} from "@apollo/client";


const ListProcess = (props) => {


  const { loading, data, error } = useQuery(
    processList,
    {
      fetchPolicy: "network-only"
    }
  )

    
  if (loading) {
    return <p>...загрузка</p>;
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }
  
  console.log(data);
  debugger
   return ( 
          <div>  
            {data.processList.map(process => (
                    <ProcessItem key={process.id} processData={process} className={s.process} />
                  ))}
          </div>
          );
        };
export default ListProcess;