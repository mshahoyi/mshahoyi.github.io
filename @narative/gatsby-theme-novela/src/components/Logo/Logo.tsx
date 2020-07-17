import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

import mediaqueries from '@styles/media';

import { Icon } from '@types';

const Logo: Icon = ({ fill = 'white' }) => {
  return (
    <LogoContainer>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <LogoComponent fill={fill} className="Logo__Desktop">
        <span className="first">Mohammed</span>
        <span className="second">Shahoe</span>
      </LogoComponent>
      <LogoComponent fill={fill} className="Logo__Mobile">
        <span className="first">M⋅</span>
        <span className="second">Shahoe</span>
      </LogoComponent>
    </LogoContainer>
  );
};

export default Logo;

const LogoComponent = styled.div`
  font-family: 'Cinzel', serif;
  font-size: 20pt;
  color: ${props => props.fill};

  .first {
    font-weight: 700;
    font-size: 20pt;
  }
`;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }
  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
