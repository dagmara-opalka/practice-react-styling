// ./src/components/Tabs/Tabs.js
import React, { useState } from 'react';
import { TabsContainer, TabList, TabContent } from './Tabs.styled';

const Tabs = ({ defaultActiveKey, children }) => {
    const [activeKey, setActiveKey] = useState(defaultActiveKey);

    const handleTabClick = (eventKey) => {
        setActiveKey(eventKey);
    };

    const tabs = React.Children.map(children, (child) =>
        React.cloneElement(child, {
            isActive: child.props.eventKey === activeKey,
            onClick: () => handleTabClick(child.props.eventKey),
        })
    );

    const activeTabContent = children.find((child) => child.props.eventKey === activeKey)?.props.children;

    return (
        <TabsContainer>
            <TabList>{tabs}</TabList>
            <TabContent>{activeTabContent}</TabContent>
        </TabsContainer>
    );
};

export default Tabs;
