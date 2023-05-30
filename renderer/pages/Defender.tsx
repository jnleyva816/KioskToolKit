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
    borderRadius: '5px',
    width: '200px',
    marginTop:'30px',
    fontSize: '13px',
    backgroundColor: '#2672fB',
    height: '160px'
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

const ButtonBox= styled(Box)(({theme}) => {
    return {
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        backgroundColor: "rgba(10, 10, 10, .2)",
        paddingTop: '40px',
        width: '70%',
        height: '350px',
        borderRadius: '20px',
        marginTop: '20px'


        
    };
});

const SectionTitle = styled(Typography)(({theme}) => {
    return {
        fontSize:'28px',
        fontWeight: '300',
        color:'white',

    };
})

const TitleContext= styled(Box)(({theme}) => {
    return {
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
    };
});

const ButtonContent= styled(Box)(({theme}) => {
    return {
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
    };
});


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
            <TitleContext>
                <SectionTitle variant='h6'>
                Disable/Enable Windows Defender
                </SectionTitle>
            </TitleContext>
            <ButtonContent>
            <StyledButton variant="contained" onClick={Disable}>Remove Windows Defender</StyledButton>
            <StyledButton variant="contained" onClick={Enable}>Enable Windows Defender</StyledButton>
            <StyledButton variant="contained" onClick={Disable}>Disable Windows Defender</StyledButton>
            </ButtonContent>    
        </ButtonBox>
       
        
    </Root>
    </React.Fragment>
    
  )
}

export default Defender