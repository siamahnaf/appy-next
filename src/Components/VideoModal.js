/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Box, Button } from 'theme-ui';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Fade from 'react-reveal/Fade';

import Icons from 'Utilis/Icons';

function VideoModal({ videoBtn, youtube }) {
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
            <Button
                variant="buttons.secondary"
                sx={{ backgroundColor: "transparent", color: 'background', cursor: 'pointer' }}
                onClick={modaleToggler}
            >
                <Icons icon="clarity:play-solid" />
                {videoBtn}
            </Button>
            <Rodal
                visible={state.visible}
                onClose={modaleToggler}
                width={950}
                height={580}
                duration={400}
                customMaskStyles={{ background: '#0B0B13AB' }}
                enterAnimation="fade"
                leaveAnimation="fade"
                sx={styles.Rodal}
            >
                <Box>
                    {state.visible &&
                        <iframe sx={{ width: "100%", height: ["300px", null, "400px", "580px", null, null, "580px"] }} src={`https://www.youtube.com/embed/${youtube}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    }
                </Box>
            </Rodal>
        </Box>
    )
}
export default VideoModal;

const styles = {
    Rodal: {
        '.rodal-dialog': {
            p: '0',
            bg: "transparent",
            width: ["300px !important", null, "400px !important", null, null, "600px !important", "950px !important",],
            height: ["300px !important", null, null, null, null, "320px !important", "580px !important"],
            top: [null, null, null, "0 !important", "0 !important"]
        },
        '.rodal-close': {
            top: '-20px',
            right: '2px',
            '&:after, &:before': {
                background: "white",
            }
        }
    }
}
