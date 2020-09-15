import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TabNavigator} from './AppTabNavigator';
import {CustomSideBarMenu} from './customsidebarmenu';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const Appdrawer=createDrawerNavigator({
home:{screen:TabNavigator},

},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'home'
}
)