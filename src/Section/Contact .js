/** @jsxImportSource theme-ui */
import { Container, Heading, Paragraph } from 'theme-ui';
import Fade from 'react-reveal/Fade';

import ContactModal from 'Components/ContactModal';

function Contact({ ContactData }) {
    return (
        <Container as="section" px={["15px", "20px", "25px", "40px", "90px", "250px", "380px"]} py={6} sx={{ textAlign: "center" }} id="contact">
            <Fade bottom>
                <Heading as="h1" sx={styles.Heading}>{ContactData.title}</Heading>
            </Fade>
            <Fade bottom delay={100}>
                <Paragraph as="p" sx={styles.Paragraph}>{ContactData.details}</Paragraph>
            </Fade>
            <ContactModal btnText={ContactData.btnText} />
        </Container>
    )
}
export default Contact;

const styles = {
    Heading: {
        fontSize: ["35px", null, null, "40px", "45px", null, null],
        mb: "15px"
    },
    Paragraph: {
        fontSize: "16px",
        color: "secondary",
        mb: "20px"
    }
}
