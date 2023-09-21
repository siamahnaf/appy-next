/** @jsxImportSource theme-ui */
import { Container, Grid, Box, Flex, Paragraph, Text } from 'theme-ui';
import VisibilitySensor from "react-visibility-sensor";

import Odometers from 'Components/Odometers';


function Award({ AwardData }) {
    return (
        <Container as="section" px={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]} sx={styles.Container}>
            <Grid columns={[1, null, 2, null, null, 4, null]}>
                {AwardData &&
                    AwardData.map((award, i) => (
                        <Box sx={styles.Card} key={i}>
                            <Flex as="h2" sx={styles.Counter}>
                                <Odometers value={award.number} />
                                <Text as="span" sx={styles.Quantity}>{award.quantity}</Text>
                            </Flex>
                            <Paragraph as="p" sx={styles.Paragraph}>{award.title}</Paragraph>
                        </Box>
                    ))
                }
            </Grid>
        </Container>
    )
}
export default Award;

const styles = {
    Container: {
        bg: "background_primary",
        py: "4rem",
    },
    Card: {
        textAlign: "center"
    },
    Counter: {
        width: "max-content",
        mx: "auto",
        fontSize: "45px",
        color: "white"
    },
    Quantity: {
        marginLeft: "10px",
        fontSize: "45px",
        fontFamily: "heading",
        mt: "4px"
    },
    Paragraph: {
        fontSize: "17px",
        color: "text_secondary"
    }
}
