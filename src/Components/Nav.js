/** @jsxImportSource theme-ui */
import { useState, useRef, useEffect } from 'react';
import { Box, Button, Heading } from 'theme-ui';
import { Link } from 'react-scroll';

import Icons from 'Utilis/Icons';

function Nav({ navs }) {
    const ref = useRef();
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
    useOnClickOutside(ref, () => setNav(false));
    return (
        <Box className="nav" sx={{ flex: "0 0 50%", textAlign: "right" }} ref={ref}>
            <Button
                onClick={handleNav}
                sx={styles.Bar}
            >
                {!nav &&
                    <Icons icon="la:bars" />
                }
                {nav &&
                    <Icons icon="gridicons:cross" />
                }
            </Button>
            <Box as="nav" sx={styles.Nav} className={nav ? "active" : ''}>
                <Heading as="h3" sx={{ mt: '10px' }}>LOGO</Heading>
                <Box sx={styles.NavChild}>
                    {navs &&
                        navs.map((nav, i) => (
                            <Link
                                to={nav.path}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                key={i}
                                className="Hiujhdn"
                                sx={styles.Link}
                            >
                                {nav.name}
                            </Link>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}
export default Nav;

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}

const styles = {
    Bar: {
        bg: "transparent",
        color: "black",
        fontSize: "22px",
        padding: "0",
        color: "background",
        cursor: 'pointer'
    },
    Nav: {
        bg: "background_secondary",
        position: "fixed",
        left: "-100%",
        height: "100%",
        top: "0",
        width: "260px",
        textAlign: "left",
        pl: "35px",
        boxShadow: '0 0 20px #0000002e',
        transition: "left 0.3s cubic-bezier(0.545, 0, 0.05, 1)",
        '&.active': {
            left: "0",
        }
    },
    NavChild: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)"
    },
    Link: {
        display: "block",
        color: "text",
        fontFamily: "'Poppins', sans-serif",
        marginBottom: "5px",
        cursor: 'pointer',
        '&.active': {
            color: 'background_primary'
        }
    }
}
