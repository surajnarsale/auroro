import React from 'react'
import { Button } from '@mui/material'

interface ButtonProps {
  children: JSX.Element | JSX.Element[] | string
  textColor: string
  bgColor?: string
}

const CustomButton = ({
  children,
  textColor,
  bgColor = 'bg-red-300',
}: ButtonProps): JSX.Element | null => {
  return (
    <Button variant="outlined" className={` text-1xl font-bold m-10 ${textColor} ${bgColor} `}>
      {children}
    </Button>
  )
}

export default CustomButton
