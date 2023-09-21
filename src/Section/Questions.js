/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Container, Grid, Box, Image, Heading, Paragraph } from 'theme-ui';
import Fade from 'react-reveal/Fade';

import QuestionKit from 'Assets/question.png';
import Tickkit from 'Assets/tick.png';
import Accordions from 'Components/Accordion';

function Questions({ QuestionsData }) {
    return (
        <Container as="section" px={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]} py={6} id="question">
            <Grid columns={[1, null, null, null, null, 2, null]}>
                <Box>
                    <Fade>
                        <Box sx={styles.ImageBox}><Image src={QuestionKit} alt="Question" /></Box>
                        <Heading as="h1" sx={styles.Heading}>{QuestionsData.title}</Heading>
                        <Paragraph as="p" sx={styles.Paragraph}>{QuestionsData.details}</Paragraph>
                        <Accordions questions={QuestionsData.questions} />
                    </Fade>
                </Box>
                <Fade right>
                    <Box sx={styles.rigthImage}>
                        <Image src={Tickkit} alt="Tick" />
                    </Box>
                </Fade>
            </Grid>
        </Container>
    )
}
export default Questions;

const styles = {
    ImageBox: {
        bg: "background_forthly",
        width: "80px",
        height: "80px",
        p: "23px",
        borderRadius: "50%",
        mb: "10px",
        img: {
            mt: "-35px"
        }
    },
    Heading: {
        fontSize: ["35px", null, null, "40px", "45px", null, null],
        mb: "10px",
        fontWeight: 600
    },
    Paragraph: {
        color: "#666",
        mb: "2rem",
        fontSize: "15px"
    },
    rigthImage: {
        marginTop: "4rem",
        width: "60%",
        marginLeft: ["65px", null, "90px", "120px", null, null, "100px"]
    }
}
