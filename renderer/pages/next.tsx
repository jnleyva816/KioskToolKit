import React from 'react'
import { Box} from '@mui/system'
import { Typography, Button } from '@mui/material'
import {styled} from '@mui/material';
import Sidebar from '../components/Sidebar';
import Link from '../components/Link';
const { shell, app } = require('electron');
const path = require('path');
const os = require('os');
import {PowerShell} from 'node-powershell'
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
    width: '150px',
    fontSize: '14px',
    fontWeight: '400',
    backgroundColor: '#2672fB',
    height: '100px'
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
        width: '80%',
        height: "90%",
        borderRadius: '10px'

        
    };
});

const SectionTitle = styled(Typography)(({theme}) => {
    return {
        fontSize:'24px',
        fontWeight: '400',
        color:'white',

    };
})
const ContentTitle = styled(Typography)(({theme}) => {
    return {
        fontSize:'18px',
        fontWeight: '300',
        color:'white',

    };
})

const DisbaleButtonBox= styled(Box)(({theme}) => {
    return {
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        backgroundColor: "rgba(10, 10, 10, 0)",
        width: '80%',
        height: "10%",
        borderRadius: '20px',
        paddingTop: '80px',
        marginTop: '20px'
        

        
    };
});
const RestoreButtonBox= styled(Box)(({theme}) => {
    return {

        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        paddingLeft: '0px',
        justifyContent: 'space-evenly',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        backgroundColor: "rgba(10, 10, 10, 0)",
        width: '80%',
        height: "60%",
        borderRadius: '20px',
        marginTop: '40px',
        paddingBottom: '40px'
        
    };
});

var loc = process.cwd();

// C:\Users\Josh\Desktop\Toolkit\KioskToolKit\scripts\helloworld.bat



function Next() {

    
    function Tier1(){
        shell.openPath(loc + '\\scripts\\Tier1.bat')
    
    }

    function Tier2(){
        shell.openPath(loc + '\\scripts\\helloworld.ps1')
     }

     function Tier3(){
        shell.openPath(loc + '\\scripts\\helloworld.bat')
     }

     function Restore(){
        shell.openPath(loc + '\\scripts\\Restore.bat')
     }

    return (
        <React.Fragment>
        <Head>
        <title>Hardened Image Scripts - MetaDefender Kiosk Toolkit</title>
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
            Hardened Image Scripts
            </SectionTitle>
            
            <DisbaleButtonBox>
                <ContentTitle variant='body1'>
                    Disable Servies by Tier:
                </ContentTitle>
                <StyledButton variant="contained" onClick={Tier1}>Tier 1</StyledButton>
                <StyledButton variant="contained" onClick={Tier2}>Tier 2</StyledButton>
                <StyledButton variant="contained" onClick={Tier3}>Tier 3</StyledButton>
            </DisbaleButtonBox>
            <RestoreButtonBox>
                <ContentTitle variant='body1'>
                    Restore Services:
                </ContentTitle>
                <StyledButton variant="contained" onClick={Restore}>Restore</StyledButton>
            </RestoreButtonBox>

        </ButtonBox>
       
        
    </Root>
        </React.Fragment>
       
    );
};

export default Next;
