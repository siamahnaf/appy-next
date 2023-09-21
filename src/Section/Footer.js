/** @jsxImportSource theme-ui */
import { Container, Grid, Box, Paragraph } from 'theme-ui';
import Fade from 'react-reveal/Fade';

import Socils from 'Components/Socils';
import Logo from 'Components/Logo';

function Footer({ FooterData }) {
    return (
        <Container as="footer" px={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]} sx={styles.Container}>
            <Grid columns={[1, null, null, null, null, 3, null]}>
                <Box sx={{ mt: "8px", mx: ["auto", null, null, null, null, 'unset', null] }}>
                    <Socils socials={FooterData.socials} />
                </Box>
                <Fade delay={500}>
                    <Box sx={styles.Logo}>
                        <Logo logo={FooterData.logo} />
                    </Box>
                </Fade>
                <Box sx={styles.Copyright}>
                    <Paragraph as="p">{new Date().getFullYear()} {FooterData.copyright}</Paragraph>
                </Box>
            </Grid>
        </Container>
    )
}
export default Footer;

const styles = {
    Container: {
        background: "black",
        py: "20px"
    },
    Logo: {
        textAlign: "center",
        mt: "3px"
    },
    Copyright: {
        textAlign: ["center", null, null, null, null, "right", null],
        color: "text_secondary",
        mt: "3px",
        fontSize: "16px"
    }
}