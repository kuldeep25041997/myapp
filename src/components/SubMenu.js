import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    height: 25px;
    list-style: none;
    text-decoration: none;
    

    &: hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #414757:
    height: 60px;
    // padding-left: 15px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 15px;
    padding: 10px;
    padding-left: 40px;

    
    &:hover{
        background: #632ce4;
        cursor: pointer;
    }
    
    
    `

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
return (
    <>
    <SidebarLink to={item.path} onClick={item.subNav && showSubnav} >
        <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
            {item.subNav && subnav
             ? item.iconOpened
             : item.subNav
             ? item.iconClosed
             : null}
        </div>
    </SidebarLink>
    {subnav && item.subNav.map((item, index) => {
        return(
            <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
        )
    })}
    </>
)
}

export default SubMenu;