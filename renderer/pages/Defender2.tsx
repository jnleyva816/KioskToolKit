import React from 'react'
import { Box} from '@mui/system'
import { Typography, Button } from '@mui/material'
import {styled} from '@mui/material';
import Sidebar from '../components/Sidebar';
import Head from 'next/head';


const Root = styled('div')(({theme}) => {
    return {
        textAlign: 'center',
        paddingTop: theme.spacing(10),
        backgroundColor: '#111F42',
        height: '100vh'
    };
});


const TitleBox= styled(Box)(({theme}) => {
    return {
        position: 'absolute',
        top: '0',
        paddingLeft: '80px',
        paddingTop: '20px'
        
    };
});

const Title= styled(Typography)(({theme}) => {
    return {
        fontSize:'20px',
        fontWeight: '200',
        color:'white',

    };
});

const ContentTitle= styled(Typography)(({theme}) => {
  return {
      fontSize:'24px',
      fontWeight: '300',
      color:'white',

  };
});

const ContentBox= styled(Box)(({theme}) => {
    return {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        backgroundColor: " rgba(10, 10, 10, .2);",
        paddingTop: '20px',
        width: '80%',
        height: "80%",
        borderRadius: '20px',
    };
});
const ContentBoxLeft= styled(Box)(({theme}) => {
  return {
      position: "relative",
      backgroundColor: "none",
      width: '50%',
      height: "80%",
      borderRadius: '0px',
      top: '10px',
      left: '20px',
      borderRight: '.5px solid white'
  };
});



const Defender = () => {
  return (
    <React.Fragment>
        <Head>
        <title>Windows Defender Remover - MetaDefender Kiosk Toolkit</title>
      </Head>
        <Root>
        <TitleBox>
            <Title variant='h6'>
            OPSWAT METADEFENDER KIOSK TOOLKIT
            </Title>
        </TitleBox>
        <Sidebar/>
        <ContentBox >
          <ContentTitle>Windows Defender</ContentTitle>
          <ContentBoxLeft>

          </ContentBoxLeft>
        </ContentBox>
       
        
    </Root>
    </React.Fragment>
    
  )
}

export default Defender