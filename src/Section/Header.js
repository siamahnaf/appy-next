/** @jsxImportSource theme-ui */
import { Container, Flex } from 'theme-ui';

import Logo from 'Components/Logo';
import Nav from 'Components/Nav';

function Header({ NavData }) {
    return (
        <Container as="header" px={["15px", "20px", "25px", "40px", "60px", "70px", "105px"]} sx={styles.HeaderArea}>
            <Flex>
                <Logo logo={NavData.logo} />
                <Nav navs={NavData.navs} />
            </Flex>
        </Container >
    )
}
export default Header;

const styles = {
    HeaderArea: {
        position: 'fixed',
        top: "0",
        left: "0",
        width: "100%",
        bg: "background_primary",
        py: "12px",
        zIndex: "99"
    }
}
