/** @jsxImportSource theme-ui */
import { Box, Container, Heading, Flex, Button, Paragraph, Link, Grid, Image } from 'theme-ui';
import Fade from 'react-reveal/Fade';

import HeroBg from 'Assets/hero-bg.png';
import HeroKit from 'Assets/hero-kit.png';
import VideoModal from 'Components/VideoModal';

function Hero({ HeroData }) {
    return (
        <Container as="section" pl={["15px", "20px", "25px", "40px", "60px", "105px"]} pb={["0", null, null, null, "2.3rem", "3.3rem", "3.9rem"]} sx={styles.Container} id="hero" pr={["10px", "15px", "20px", "40px", "0"]}>
            <Grid columns={[1, null, null, null, 2]}>
                <Box sx={{ mt: ['6rem', null, null, null, "8rem", "13rem", "15rem"] }}>
                    <Fade left>
                        <Heading as="h1" sx={styles.Heading}>{HeroData.title}</Heading>
                        <Heading as="h1" sx={styles.Heading}>{HeroData.title1}</Heading>
                    </Fade>
                    <Fade left delay={100}>
                        <Paragraph as="p" sx={styles.ContainerText}>{HeroData.description}</Paragraph>
                    </Fade>
                    <Flex sx={{ alignItems: 'center', mt: "2rem" }}>
                        <Fade left delay={200}>
                            <Link href={HeroData.downloadBtnUrl}>
                                <Button sx={{ bg: "background", color: 'text' }}>{HeroData.downloadBtn}</Button>
                            </Link>
                        </Fade>
                        <VideoModal videoBtn={HeroData.videoBtn} youtube={HeroData.youtubeVideoId} />
                    </Flex>
                </Box>
                <Fade right>
                    <Box sx={styles.Image}>
                        <Image src={HeroKit} alt="Image" />
                    </Box>
                </Fade>
            </Grid>
        </Container >

    )
}
export default Hero;

const styles = {
    Container: {
        background: `url('${HeroBg}')`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    Heading: {
        fontSize: ["35px", null, null, null, "45px", null, "52px"],
        color: "white",
        mt: "-5px"
    },
    ContainerText: {
        color: "white",
        fontSize: ["13px", null, null, null, null, null, "15px"],
        margin: "10px 0"
    },
    Image: {
        width: "85%",
        ml: ["auto", null, null, null, "46px", "21px", "auto"],
        mr: "3.9rem",
        mt: ["3rem", null, null, null, "9rem", null, "7rem"]
    }
}
