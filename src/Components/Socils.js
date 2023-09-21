/** @jsxImportSource theme-ui */
import { Flex, Link } from 'theme-ui';

import Icons from 'Utilis/Icons';

function Socils({ socials }) {
    return (
        <Flex>
            {socials &&
                socials.map((social, i) => (
                    <Link href={social.url} key={i} sx={styles.Socials} target="_blank">
                        <Icons icon={social.icon} />
                    </Link>
                ))
            }
        </Flex>
    )
}
export default Socils;

const styles = {
    Socials: {
        color: "white",
        mr: "10px",
        fontSize: "15px",
    }
}