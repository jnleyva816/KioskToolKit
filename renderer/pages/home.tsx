import React from 'react'
import { Box} from '@mui/system'
import { Typography, Button } from '@mui/material'
import {styled} from '@mui/material';
import Sidebar from '../components/Sidebar';
import Link from '../components/Link';

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
        fontSize:'16px',
        fontWeight: '100',
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
        backgroundColor: "#282828",
        paddingTop: '40px',
        width: '80%',
        height: "80%",
        borderRadius: '20px'

        
    };
});

const SectionTitle = styled(Typography)(({theme}) => {
    return {
        fontSize:'24px',
        fontWeight: '200',
        color:'white',

    };
})


const SectionContent = styled(Typography)(({theme}) => {
    return {
        fontSize:'16px',
        fontWeight: '200',
        color:'white',

    };
})

const home = () => {
  return (
    <Root>
        <TitleBox>
            <Title variant='h6'>
            OPSWAT METADEFENDER KIOSK TOOLKIT
            </Title>
        </TitleBox>
        <Sidebar/>
        <SectionBox>
        <SectionTitle variant='subtitle1' > Welcome to the Metadefender OPSWAT Kiosk Toolkit.</SectionTitle>
        <br/>
        <SectionContent variant='subtitle2'> This tool will be used to Disable/Enable Windows Defender.</SectionContent>
        <br/>
        <SectionContent variant='subtitle2'> You will also be able to run Hardened Image Scripts.</SectionContent>
        <br/>
        <SectionContent variant='subtitle2'> To get started please navigate to the appropriate tab on the left panel.</SectionContent>
        </SectionBox>
        
       
        
    </Root>
  )
}

export default home