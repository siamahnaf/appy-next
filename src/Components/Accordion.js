/** @jsxImportSource theme-ui */
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Accordions = ({ questions }) => {

    return (
        <Accordion>
            {questions.map((question, i) => (
                <AccordionItem key={i} sx={{ mb: "20px" }}>
                    <AccordionItemHeading>
                        <AccordionItemButton sx={styles.AccordianHeading}>
                            {question.question}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel sx={styles.AccordianPane}>
                        {question.ans}
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
export default Accordions;

const styles = {
    AccordianHeading: {
        fontSize: "18px",
        fontFamily: "'Roboto', sans-serif",
        color: "background_primary",
        cursor: "pointer",
        transition: '0.3s ease'
    },
    AccordianPane: {
        fontSize: "15px",
        marginTop: "10px",
        fontFamily: "'Poppins', sans-serif"
    }
}
