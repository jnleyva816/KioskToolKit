import React from 'react'
import { Box} from '@mui/system'
import { Typography, Button } from '@mui/material'
import {styled} from '@mui/material';
import Sidebar from '../components/Sidebar';
import Link from '../components/Link';
const { shell, app } = require('electron');
;



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
    width: '115px',
    marginTop:'0px',
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
        fontWeight: '100',
        color:'white',

    };
})
const ContentTitle = styled(Typography)(({theme}) => {
    return {
        fontSize:'18px',
        fontWeight: '100',
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
        backgroundColor: "#282828",
        width: '80%',
        height: "10%",
        borderRadius: '20px',
        paddingTop: '50px'
        

        
    };
});
const RestoreButtonBox= styled(Box)(({theme}) => {
    return {

        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-evenly',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        backgroundColor: "#282828",
        width: '80%',
        height: "10%",
        borderRadius: '20px',
        marginTop: '60px'
        
    };
});



function Next() {
    function helloWorld(){
       alert("Your are about to disable services on your computer, are you sure you want to proceed?")
    }

    return (
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
            <StyledButton variant="contained" onClick={helloWorld}>Tier 1</StyledButton>
            <StyledButton variant="contained">Tier 2</StyledButton>
            <StyledButton variant="contained">Tier 3</StyledButton>
            </DisbaleButtonBox>
            <RestoreButtonBox>
            <ContentTitle variant='body1'>
            Restore Services:
            </ContentTitle>
            <StyledButton variant="contained">Restore</StyledButton>
            </RestoreButtonBox>

        </ButtonBox>
       
        
    </Root>
    );
};

export default Next;
