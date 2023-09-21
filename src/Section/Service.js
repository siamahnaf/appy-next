/** @jsxImportSource theme-ui */
import { Container, Box, Grid, Heading, Paragraph, Image } from 'theme-ui';
import Fade from 'react-reveal/Fade';

function Service({ ServiceData }) {
    return (
        <Container as="section" px={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]} py={[5, null, null, 6, null, null, null]} id="service">
            <Grid columns={[1, null, null, 2, null, 3, null]}>
                {ServiceData &&
                    ServiceData.map((service, i) => (
                        <Fade key={i} bottom delay={i === 1 ? '100' : (i === 2 ? "200" : '0')}>
                            < Box sx={styles.Card} >
                                <Box sx={styles.ImageBox}>
                                    <Image src={service.image} alt={service.name} />
                                </Box>
                                <Heading as="h3" sx={styles.CardHeading}>{service.name}</Heading>
                                <Paragraph as="p" sx={styles.CardParagraph}>{service.description}</Paragraph>
                            </Box>
                        </Fade>
                    ))
                }
            </Grid >
        </Container >
    )
}
export default Service;

const styles = {
    Card: {
        textAlign: "center",
        bg: "background_secondary",
        padding: "25px 30px",
        borderRadius: "15px",
        boxShadow: "0 0 20px #a2a2a212"
    },
    ImageBox: {
        background: "#FFF4F5",
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        margin: "0 auto",
        padding: "22px",
        marginBottom: "12px"
    },
    CardHeading: {
        fontSize: "18px",
        marginBottom: "12px",
        fontWeight: 600
    },
    CardParagraph: {
        fontSize: "15px",
        lineHeight: 2,
        color: "#666666"
    }
}
