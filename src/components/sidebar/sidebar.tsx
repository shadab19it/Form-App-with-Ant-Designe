import React from 'react';
import  './sidebar.scss';
import { Layout, Menu, Icon } from 'antd';


const {SubMenu} = Menu;

const sidebar:React.FC = () =>{
    return(
        <div>
               <div className="logo"></div>
               <Menu theme="dark" mode="inline" defaultSelectedKeys={['']}>
                    <Menu.Item key="1">
                       <Icon type="mail" />
                       <span>nav 1</span>
                    </Menu.Item> 
                    <SubMenu key="sub1" title={
                        <span>
                            <Icon type="user" />
                            <span>user</span>
                        </span>
                    }>
                     <Menu.Item key="2">Tom</Menu.Item>
                     <Menu.Item key="3">bill</Menu.Item>
                     <Menu.Item key="4">alex</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="5">
                     <Icon type="upload" />
                     <span>nav 3</span>
                    </Menu.Item>
                </Menu>
        </div>
    )
}

export default sidebar;


