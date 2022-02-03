import React from 'react'
import { Button, ColorPicker } from '@mantine/core'

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
    <>
      <Button className={` text-1xl font-bold m-10 ${textColor} ${bgColor} p-2 rounded-md `}>
        {children}
      </Button>
    </>
  )
}

export default CustomButton
