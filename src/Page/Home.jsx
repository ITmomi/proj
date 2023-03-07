import React from 'react';
import { Tabs } from 'antd';
import TabPane from "antd/es/tabs/TabPane";
import { Test1 } from './test/test1';
import {TapStyle} from './HomeStyle';

export const Home = () => {

	const tabItemClick = (key) => {
		console.log('tab click', key);
	};

	return (
		<>
			<TapStyle>
				<Tabs defaultActiveKey="1" size="large" onChange={tabItemClick}>
					<TabPane tab="test 1" key="1"><Test1/></TabPane>
					<TabPane tab="test 2" key="2">Content of Tab Pane 2</TabPane>
					<TabPane tab="test 3" key="3">Content of Tab Pane 3</TabPane>
				</Tabs>
			</TapStyle>
		</>
	)
}