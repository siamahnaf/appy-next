/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Box, Button, Heading } from 'theme-ui';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Fade from 'react-reveal/Fade';

import Form from './Form';

function ContactModal({ btnText }) {
    const [state, setState] = useState({
        visible: false
    });
    const modaleToggler = () => {
        setState({
            visible: !state.visible
        })
    }
    return (
        <Box>
            <Fade bottom delay={200}>
                <Button
                    sx={{ cursor: 'pointer' }}
                    onClick={modaleToggler}
                >
                    {btnText}
                </Button>
            </Fade>
            <Rodal
                visible={state.visible}
                onClose={modaleToggler}
                width={950}
                height={580}
                customMaskStyles={{ background: '#0B0B13AB' }}
                enterAnimation="zoom"
                leaveAnimation="slideDown"
                sx={styles.Rodal}
            >
                <Heading as="h3" sx={styles.Heading}>Contact Us</Heading>
                <Form />
            </Rodal>
        </Box>
    )
}
export default ContactModal;

const styles = {
    Rodal: {
        textAlign: 'left',
        '.rodal-dialog': {
            width: ["300px !important", null, "400px !important", null, null, "600px !important", "950px !important",],
            height: ["300px !important", null, null, null, null, "320px !important", "580px !important"],
            top: [null, null, null, "0 !important", "0 !important"]
        },
    },
    Heading: {
        fontSize: "16px",
        fontWeight: 500,
        borderBottom: "1px solid #0000002b",
        pb: "10px",
        mb: "25px"
    }
}