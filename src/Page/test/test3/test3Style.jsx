import styled from '@emotion/styled';
import {keyframes} from "@emotion/react";

const circle = keyframes`
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const Test3Style = styled.div`
  line-height: 1.5em;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
  
  .square {
  	width: 400px;
  	height: 400px;
  	position: relative;
  	margin: 20px;
  }
  .square span {
  	position: absolute;
  	width: 100%;
  	height: 100%;
  	border: 1px solid white;
  	border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
  	transition: 0.5s;
  }
  .square:hover span {
  	border: none;	
  }
  .square:hover:nth-child(1) span {
  	background-color: green;
  }
  .square:hover:nth-child(2) span {
  	background-color: orange;
  }
  .square:hover:nth-child(3) span {
  	background-color: crimson;
  }
  .square:hover span:nth-child(1) {
  	opacity: 0.3;
  }
  .square:hover span:nth-child(1) {
  	opacity: 0.5;
  }
  .square:hover span:nth-child(1) {
  	opacity: 0.8;
  }
  .square span:nth-child(1) {
		animation: ${circle} 6s linear infinite;
  }
  .square span:nth-child(2) {
		animation: ${circle} 4s linear infinite;
		animation-direction: reverse;
  }
  .square span:nth-child(3) {
		animation: ${circle} 10s linear infinite;
  }
	.square div {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 70%;
	color: white;
	text-align: center;
	}
	.square div a {
		display: block;
		color: white;
		border: 1px solid white;
		border-radius: 40% 60% 65% 35%;
		padding: 10px;
		margin-top: 10px;
	}
`;
