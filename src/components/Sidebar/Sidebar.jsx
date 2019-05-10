import React from 'react'
import cs from './Sidebar.module.sass'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className={cs.Sidebar}>
      <div className={cs.icon}>
        <img src="/img/Icon.svg" alt="main icon"/>
      </div>

      <div className={cs.pages}>
        <Link to='/rewards'>
          <SidebarLink name='Rewards' icon='Gift.svg' />
        </Link>
        <Link to='/crypto'>
          <SidebarLink name='Crypto' icon='Download.svg' selected />
        </Link>
        <Link to='/transactions'>
          <SidebarLink name='Transactions' icon='Hamburger.svg' />
        </Link>
      </div>

      <div className={cs.supportPages}>
        <SidebarLink name='Settings' icon='Settings.svg' />
        <SidebarLink name='Support' icon='QuestionMark.svg' />
      </div>
    </nav>
  )
}

function SidebarLink({ name, icon, selected }) {
  return (
    <div className={cs.item + ' ' + (selected ? cs.selected : '')}>
      <div>
        <img src={`/img/${icon}`} alt="link icon"/>
      </div>
      <span>{ name }</span>
    </div>
  )
}

export default Sidebar;