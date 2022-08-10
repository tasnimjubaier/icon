import React, {useState} from 'react'
import './Sidebar.scss'
import sidebarmenus from '../../Utils/sidebarMenus'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

const Sidebar = () => {
    const [menus, setMenus] = useState(sidebarmenus);
    const [currentTab, setCurrentTab] = useState(menus[4].title);

    return (
        <div className='container'>
            <div className='title'>
                <div className='image'> </div>
                <div className='toggle'> <KeyboardArrowLeftOutlinedIcon /> </div>
            </div>
            <div className='divider'></div>
            <ul className='menus'>
                {
                    menus.map((menu, key) => {
                        return (
                            <li key={key} className="item">
                                <div className='wrapper'>
                                    {currentTab === menu.title && <div className='active' />}
                                    <div className='icon'> {menu.icon} </div>
                                    <div className='name'>{menu.title}</div>
                                    <div className='expand'>{menu.expand}</div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar