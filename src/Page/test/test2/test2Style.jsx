import styled from '@emotion/styled';
import {keyframes} from "@emotion/react";

const Loading = keyframes`
	0% {
		top: 0;
		left: 0;
	}
	25% {
		top: 0;
		left: calc(100% - 10px);
		background-color: dodgerblue;
	}
	50% {
		top: calc(100% - 10px);
		left: calc(100% - 10px);
		background-color: gold;
	}
	75% {
		top: calc(100% - 10px);
		left: 0;
		background-color: purple;
	}
	100% {
		top: 0;
		left: 0;
	}
`;

export const Test2Style = styled.div`
  line-height: 1.5em;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .loading {
  	width: 30px;
  	height: 30px;
  	position: relative;
  }
  .loading span {
		position: absolute;
		width: 10px;
		height: 10px;
		background-color: crimson;
		top: 0;
		left: 0;
		animation: ${Loading} 1.5s infinite;
  }
  .loading span:nth-child(1) {

  }
  .loading span:nth-child(2) {
		animation-delay: 0.8s;
  }

`;
