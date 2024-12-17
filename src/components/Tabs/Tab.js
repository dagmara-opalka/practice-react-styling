// ./src/components/Tabs/Tab.js
import React from 'react';
import { TabButton } from './Tabs.styled';

const Tab = ({ isActive, onClick, title, disabled }) => {
    return (
        <TabButton isActive={isActive} onClick={!disabled ? onClick : undefined} disabled={disabled}>
            {title}
        </TabButton>
    );
};

export default Tab;
