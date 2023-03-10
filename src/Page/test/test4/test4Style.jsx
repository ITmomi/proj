import styled from '@emotion/styled';
import {keyframes} from "@emotion/react";

const Loading = keyframes`
	0% {

	}
	100% {

	}
`;

export const Test4Style = styled.div`
  line-height: 1.5em;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  .items {
  	display: flex;
  	text-align: center;
  }
  .item {
  	position: relative;
  	border: 1px solid #d9d9d9;
  	margin: 5px;
  }
  .item:hover .caption {
  	opacity: 1;
  	
  }
  .caption {
	  width: 300px;
	  height: 300px;
	  background-color: rgba(26,26,26,0.63);
	  position: absolute;
	  top: 0;
	  left: 0;
	  color: white;
	  padding: 50px 20px;
	 	opacity: 0;
	 	transition: 0.5s;
  }
  .caption a {
  	background-color: #0a66ef;
  	color: white;
  	padding: 5px;
  	border-radius: 5px;
  }
  .caption a:hover {
  	background-color: white;
  	color: #1a1a1a;
  	
  }

`;
