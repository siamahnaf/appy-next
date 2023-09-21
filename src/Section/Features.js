/** @jsxImportSource theme-ui */
import { Container, Grid, Box, Image, Heading, Paragraph, Flex } from 'theme-ui';
import Fade from 'react-reveal/Fade';

import MusicKit from 'Assets/music.png';
import FeatureKit from 'Assets/features/FeatureKit.png'

function Features({ FeaturesData }) {
    return (
        <Container as="section" pl={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]} pr={["15px", null, "20px", "25px", "30px", "35px", "40px"]} py={[5, null, null, 6, null, null, null]} id="features">
            <Grid columns={[1, null, null, null, null, 2, null, '1fr 2fr']}>
                <Fade left>
                    <Box>
                        <Box sx={styles.ImageBox}><Image src={MusicKit} alt="Music" /></Box>
                        <Heading as="h2" sx={styles.Heading}>{FeaturesData.title}</Heading>
                        <Paragraph as="p" sx={styles.Paragraph}>{FeaturesData.details}</Paragraph>
                        <Box sx={{ mt: "2rem" }}>
                            {FeaturesData.features &&
                                FeaturesData.features.map((feature, i) => (
                                    <Box key={i} sx={styles.CardContainer}>
                                        <Flex sx={{ alignItems: "center" }}>
                                            <Box sx={styles.IconImage}>
                                                <Image src={feature.image} alt={feature.title} />
                                            </Box>
                                            <Heading as="h4">{feature.title}</Heading>
                                        </Flex>
                                        <Paragraph as="p">{feature.details}</Paragraph>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Fade>
                <Fade right>
                    <Box sx={styles.RightImage}>
                        <Image src={FeatureKit} alt="Feature" />
                    </Box>
                </Fade>
            </Grid>
        </Container>
    )
}
export default Features;

const styles = {
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
        marginBottom: "10px",
        fontWeight: 600
    },
    Paragraph: {
        fontSize: "16px",
        color: "#666"
    },
    CardContainer: {
        mb: "2rem",
        p: {
            fontSize: "15px",
            marginTop: "10px"
        }
    },
    IconImage: {
        bg: "background_forthly",
        width: "50px",
        height: "50px",
        padding: "16px",
        borderRadius: "50%",
        marginRight: "15px",
        h4: {
            fontSize: "16px",
            fontWeight: 600
        }
    },
    RightImage: {
        width: "85%",
        ml: ["27px", null, null, null, null, "auto", null],
        mt: "5rem"
    }
}