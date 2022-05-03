import React, { useEffect, useState } from 'react';
import {FaEye} from 'react-icons/fa';

interface IProps {
    Icon: any,
    placeholder: string,
    type: string
}
const Input: React.FC <IProps> = ({Icon, placeholder, type='string'}) => {
    const [passwordType, setType] = useState<boolean>(true);
    useEffect(() => {
        setType(true)
    },[placeholder])
    return (
        <div style={{display:'flex', alignItems:'center'}}>
            <div style={{marginLeft:'0em'}}>
            {Icon}
            </div>
            <input placeholder={placeholder} type={(type === 'password' && passwordType) ? 'password' :'string'} style={{marginLeft:'0.5em', width:'90%'}} />
            {type === 'password' && 
             <FaEye  color='gray' style={{cursor:'pointer'}}
              onClick={() => setType(!passwordType)}
             />
            }
        </div>
    )
}
export default Input;