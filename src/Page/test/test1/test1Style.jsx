import styled from '@emotion/styled';
import {keyframes} from "@emotion/react";

const Loading = keyframes`
	0% {
		opacity: 0;
		transform: scale(0.5);
	}
	50% {
		opacity: 1;
		transform: scale(1.2);
	}
	100% {
		opacity: 0;
		transform: scale(0.5);
	}
`;

export const Test1Style = styled.div`
  line-height: 1.5em;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .loading {}
  .loading span {
  	display: inline-block;
  	width: 15px;
  	height: 15px;
  	background-color: gray;
  	border-radius: 50%;
  	margin-right: 3px;
  	animation: ${Loading} 1s linear infinite;
  }
  .loading span:nth-child(1) {
  	animation-delay: 0s;
  	background-color: crimson;
  }
  .loading span:nth-child(2) {
  	animation-delay: 0.2s;
  	background-color: darkblue;
  }
  .loading span:nth-child(3) {
   	animation-delay: 0.4s;
   	background-color: royalblue;
  }
`;
