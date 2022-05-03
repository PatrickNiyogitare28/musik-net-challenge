import React from 'react';

interface IProps {
    label: string,
    styles: any,
    className: string
}
const Button: React.FC<IProps> = ({label, styles, className}) => {
    return (
         <button className={className} style={styles}>{label}</button>
        )
}

export default Button;