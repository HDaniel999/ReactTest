import React from 'react'
import { withNavigation } from '../../utils/withNavigation'
import MenuBarItem from '../MenuBarItem/MenuBarItem'

export default function LinkNavigation (props) {
  const Wrapper = withNavigation(MenuBarItem)

  return (<Wrapper {...props} />)
}