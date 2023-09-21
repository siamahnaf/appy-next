/** @jsxImportSource theme-ui */
import { Container, Grid, Box, Heading, Paragraph, Link, Button, Image } from 'theme-ui';
import Fade from 'react-reveal/Fade';

import AppKit from 'Assets/get/app.png';
import Bg from 'Assets/get/bg.png';

function Get({ GetData }) {
    return (
        <Container as="section" pr={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]} pl={["15px", null, "20px", "25px", "30px", "35px", "90px"]} sx={styles.Container} id="get">
            <Grid columns={[1, null, null, null, null, 2, null,]}>
                <Fade left>
                    <Box sx={styles.LeftImage}>
                        <Image src={AppKit} alt="App" />
                    </Box>
                </Fade>
                <Box sx={{ mt: "32px" }}>
                    <Fade bottom>
                        <Heading as="h3" sx={styles.Heading}>{GetData.title}</Heading>
                    </Fade>
                    <Fade bottom delay={100}>
                        <Heading as="h3" sx={styles.Heading}>{GetData.title1}</Heading>
                    </Fade>
                    <Fade bottom delay={200}>
                        <Paragraph as="p" sx={styles.Paragraph}>{GetData.details}</Paragraph>
                    </Fade>
                    <Fade bottom delay={300}>
                        <Link href={GetData.btnUrl}>
                            <Button sx={styles.Buttons}>{GetData.btnText}</Button>
                        </Link>
                    </Fade>
                </Box>
            </Grid>
        </Container>
    )
}
export default Get;
const styles = {
    Container: {
        background: `url('${Bg}')`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        py: "54px"
    },
    Heading: {
        fontSize: ["35px", null, null, "40px", "45px", null, null],
        color: "background_secondary",
        mb: "-10px"
    },
    Paragraph: {
        color: "text_secondary",
        fontSize: "15px",
        mt: "30px"
    },
    Buttons: {
        color: "text",
        bg: "background_secondary",
        mt: "15px",
        mb: "30px"
    },
    LeftImage: {
        width: "68%",
        ml: ["53px", null, null, "100px", null, "51px", "75px"]
    }
}
