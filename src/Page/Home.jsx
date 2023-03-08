import React from 'react';
import { Tabs } from 'antd';
import TabPane from "antd/es/tabs/TabPane";
import {TapStyle} from './HomeStyle';
import { Test1 } from './test/test1/test1';
import { Test2 } from './test/test2/test2';
import { Test3 } from './test/test3/test3'

export const Home = () => {

	const tabItemClick = (key) => {
		console.log('tab click', key);
	};

	return (
		<>
			<TapStyle>
				<Tabs defaultActiveKey="1" size="large" onChange={tabItemClick}>
					<TabPane tab="Loading" key="1"><Test1/></TabPane>
					<TabPane tab="Loading2" key="2"><Test2/></TabPane>
					<TabPane tab="test 3" key="3"><Test3/></TabPane>
				</Tabs>
			</TapStyle>
		</>
	)
}