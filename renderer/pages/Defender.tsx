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
        fontWeight: '200',
        color:'white',

    };
});

const ButtonBox= styled(Box)(({theme}) => {
    return {
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        backgroundColor: "rgba(10, 10, 10, .2);",
        paddingTop: '40px',
        width: '50%',
        height: "70%",
        borderRadius: '20px',


        
    };
});

const SectionTitle = styled(Typography)(({theme}) => {
    return {
        fontSize:'24px',
        fontWeight: '100',
        color:'white',

    };
})


const Defender = () => {

    var loc = process.cwd();
    const {shell} = require('electron')
    function Enable(){
        shell.openPath(loc + '\\scripts\\Enable.bat')    
    }
    function Disable(){
        shell.openPath(loc + '\\scripts\\Disable.bat')    
    }
    
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
        <ButtonBox >
            <SectionTitle variant='h6'>
            Disable/Enable Windows Defender
            </SectionTitle>
            <StyledButton variant="contained" onClick={Enable}>Enable Windows Defender</StyledButton>
            <StyledButton variant="contained" onClick={Disable}>Disable Windows Defender</StyledButton>
        </ButtonBox>
       
        
    </Root>
    </React.Fragment>
    
  )
}

export default Defender