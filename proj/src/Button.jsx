import React from 'react';

const Button = ({children, onClick}) => {
	return (<button onClick={onClick} type = 'button'>{children}</button>);	
};

//Button.handleClick(){
//      alert('haha');
//    }

export default Button;