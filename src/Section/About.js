/** @jsxImportSource theme-ui */
import { Container, Grid, Box, Image, Heading, Paragraph, Button, Link } from 'theme-ui';
import Fade from 'react-reveal/Fade';

import MusicKit from 'Assets/music.png';
import HandKit from 'Assets/hand.png';

function About({ AboutData }) {
    return (
        <Container as="section" pr={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]} pl={["15px", null, "20px", "25px", "30px", "35px", "40px"]} id="about">
            <Grid columns={[1, null, null, null, null, 2, null]}>
                <Fade left delay={100}>
                    <Box sx={styles.HandImage}>
                        <Image src={HandKit} alt="Hand" />
                    </Box>
                </Fade>
                <Fade right delay={100}>
                    <Box>
                        <Box sx={styles.ImageBox}><Image src={MusicKit} alt="Music" /></Box>
                        <Heading as="h4" sx={styles.Heading}>{AboutData.title}</Heading>
                        <Heading as="h4" sx={styles.Heading}>{AboutData.title1}</Heading>
                        <Paragraph as="p" sx={styles.Pargraph}>{AboutData.details}</Paragraph>
                        <Box sx={styles.List}>
                            {AboutData.lists &&
                                AboutData.lists.map((list, i) => (
                                    <Paragraph as="p" key={i}>{list.name}</Paragraph>
                                ))
                            }
                        </Box>
                        <Link href={AboutData.btnUrl}>
                            <Button>
                                {AboutData.btnText}
                            </Button>
                        </Link>
                    </Box>
                </Fade>
            </Grid>
        </Container>
    )
}
export default About;

const styles = {
    HandImage: {
        width: "92%",
        mt: "5rem"
    },
    ImageBox: {
        bg: "background_forthly",
        width: "70px",
        height: "70px",
        p: "20px",
        borderRadius: "50%",
        mb: "10px"
    },
    Heading: {
        fontSize: ["35px", null, null, "40px", "45px", null, null],
        mt: '-5px'
    },
    Pargraph: {
        fontSize: "15px",
        mb: "15px",
        mt: "10px",
        color: "secondary"
    },
    List: {
        mb: "15px",
        p: {
            ml: "16px",
            fontSize: "15px",
            mb: "5px",
            position: "relative",
            '&:after': {
                content: '""',
                width: "10px",
                height: "10px",
                bg: "background_primary",
                position: "absolute",
                left: "-15px",
                top: "50%",
                transform: "translateY(-50%)",
                borderRadius: "50%"
            }
        }
    }
}


