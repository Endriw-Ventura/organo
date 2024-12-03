import './Button.css'
import React, { ReactElement } from 'react'

interface ButtonProps{
    children: ReactElement
}

function Button(props: ButtonProps){
    return (
        <button className='button'>
            {props.children}
        </button>
    )
}

export default Button