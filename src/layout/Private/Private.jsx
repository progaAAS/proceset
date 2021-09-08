import React from 'react';
import useToggel from 'react-use-toggle';

import back from './Private.module.css';
import Menu from '../../Nav/Menu/Menu';
import Drower from '../../Nav/Drower/Drower';





const Private = (props) => {

    const [menu, menuHandler] = useToggel(false);

  return (
    <div className={back.wrapper}>
                <div className={back.background}></div>
                <div className={back.header}>
                   <Menu 
                   onToggle={menuHandler}
                    isOpen={menu}
                    />
                   <Drower
                    isOpen={menu}
                    onClose={menuHandler}/>
                </div>

            {props.children}
      
    </div>
  )


};

export default Private;
