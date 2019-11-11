import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import LinkNavigation from '../LinkNavigation/LinkNavigation'
import './Page.css'
export default function Page (props) {
  return (
    <div className='Page'>
      <MenuBar>
        <LinkNavigation path='/about'>
          Nosotros
        </LinkNavigation>
        <LinkNavigation path='/programas'>
          programas
        </LinkNavigation>
        <LinkNavigation path='/open-class'>
          Open Class <span className='highlight--red'>Live</span>
        </LinkNavigation>
      </MenuBar>
      {props.children}
    </div>
  )
}