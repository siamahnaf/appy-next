/** @jsxImportSource theme-ui */
import { Box, Text } from 'theme-ui';
import { Link } from 'react-scroll';

function Logo({ logo }) {
    return (
        <Box sx={{ flex: "0 0 50%" }}>
            <Link to="hero" spy={true} smooth={true} duration={500} sx={styles.Logo}>
                <Text>{logo}</Text>
            </Link>
        </Box>
    )
}
export default Logo;

const styles = {
    Logo: {
        fontSize: "20px",
        fontWeight: 900,
        fontFamily: "'Roboto', sans-serif",
        color: "background"
    }
}
