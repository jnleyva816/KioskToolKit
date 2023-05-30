import React from 'react'
import { Box} from '@mui/system'
import { Typography, Button } from '@mui/material'
import {styled} from '@mui/material';
import Sidebar from '../components/Sidebar';
import Link from '../components/Link';
import Head from 'next/head';

const Root = styled('div')(({theme}) => {
    return {
        textAlign: 'center',
        paddingTop: theme.spacing(10),
        backgroundColor: '#111F42',
        height: '100vh'
    };
});

const StyledButton =styled(Button)(({theme}) =>({
    marginLeft: '10px',
    borderRadius: '25px',
    width: '225px',
    marginTop:'30px',
    fontSize: '13px',
    backgroundColor: '#2672fB'
}));

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
        fontWeight: '300',
        color:'white',

    };
});

const SectionBox= styled(Box)(({theme}) => {
    return {
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        backgroundColor: "rgba(10, 10, 10, .4);",
        paddingTop: '40px',
        width: '80%',
        height: "60%",
        borderRadius: '20px',
        marginTop: '40px'     
    };
});

const SectionTitle = styled(Typography)(({theme}) => {
    return {
        fontSize:'24px',
        fontWeight: '300',
        color:'white',

    };
})


const SectionContent = styled(Typography)(({theme}) => {
    return {
        fontSize:'18px',
        fontWeight: '200',
        color:'white',

    };
})

const home = () => {

  return (
    <React.Fragment>
        <Head>
        <title>Dashboard - MetaDefender Kiosk Toolkit</title>
      </Head>
        <Root>
        <TitleBox>
            <Title variant='h6'>
            OPSWAT METADEFENDER KIOSK TOOLKIT
            </Title>
        </TitleBox>
        <Sidebar/>
        <SectionBox>
        <SectionTitle variant='subtitle1' > Welcome to the OPSWAT Metadefender Kiosk Toolkit.</SectionTitle>
        <br/>
        <SectionContent variant='subtitle2'> This tool will be used to Disable/Enable Windows Defender.</SectionContent>
        <br/>
        <SectionContent variant='subtitle2'> You will also be able to run Hardened Image Scripts.</SectionContent>
        <br/>
        <SectionContent variant='subtitle2'> To get started please navigate to the appropriate tab on the left panel.</SectionContent>
        </SectionBox>
        
       
        
    </Root>
    </React.Fragment>
    
  )
}

export default home