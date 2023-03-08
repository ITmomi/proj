import styled from '@emotion/styled';
import {keyframes} from "@emotion/react";

const Loading = keyframes`
	0% {

	}
	25% {

	}
	50% {

	}
	75% {

	}
	100% {

	}
`;

export const Test3Style = styled.div`
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

  }

`;
