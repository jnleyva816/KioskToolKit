import React from 'react';
import styled from '@emotion/styled';
import Link from './Link';

const Bar = styled('div')(() => {
    return {
        position: 'fixed',
        backgroundColor: '#333333',
        width: '48px',
        height: '100%',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        ":hover":{
          width: '80px',
        },

    };
});

const StyledLink = styled(Link)(()=>{
    return {
        textDecoration: "none",
        color: 'white',
        fontSize: '20px',
        marginTop: '25px',
        ":hover":{
          transform: 'translateX(.5rem)',
        },
        
};
});
    

const Sidebar = () => {
  return (
    <Bar>
        <StyledLink href="/home" title="Dashboard"><i className="ri-home-line"></i></StyledLink> 
        <StyledLink href="/Defender" title="Windows Defender Remover"><i className="ri-shield-check-line"></i></StyledLink> 
        <StyledLink href="/next" title="Hardened image scripts"><i className="ri-u-disk-line"></i></StyledLink> 
    </Bar>
        

  )
}

export default Sidebar