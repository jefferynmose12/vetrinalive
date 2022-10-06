import React from 'react'
import { StatusBar } from 'react-native'
import { colors } from '../asset/color'
import { StatusBarProps } from '../type'

const StatusBarCon = () => {
  return (
    <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
  )
}

export default StatusBarCon