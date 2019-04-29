import * as React from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

const onTabSelect = (key: string) => window.location.href = `/${key}`;

type Props = {
    selectedTab: string;
};

const MainView: React.SFC<Props> = props =>  (
  <Tabs defaultActiveKey={props.selectedTab} onChange={onTabSelect}>
    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
  </Tabs>
);

export default MainView;
