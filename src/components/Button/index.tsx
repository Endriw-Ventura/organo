import './Button.css'
import React, { ReactElement } from 'react'

interface ButtonProps{
    children: ReactElement | string
}

function Button(props: ButtonProps){
    return (
        <button className='button'>
            {props.children}
        </button>
    )
}

export default Button