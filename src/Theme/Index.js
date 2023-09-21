export default {
    colors: {
        text: "#222222",
        primary: "#222222",
        background: "#F1F1F1",
        background_primary: "#FF4363",
        background_secondary: "white",
        background_forthly: "#FFF4F5",
        background_fively: "#000",
        secondary: "#666666",
        text_secondary: "white",
        text_fourthly: "red"
    },
    fonts: {
        heading: "'Roboto', sans-serif",
        body: "'Poppins', sans-serif",
    },
    breakpoints: [
        '360px', '480px', '640px', '720px', '1080px', '1200px'
    ],
    buttons: {
        primary: {
            color: "text_secondary",
            bg: "background_primary",
            fontFamily: "'Roboto', sans-serif",
            borderRadius: "55px",
            padding: "12px 18px",
            fontSize: "16px",
            fontWeight: 500,
            cursor: 'pointer'
        },
        secondary: {
            bg: "background",
            color: "text",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            cursor: 'pointer',
            svg: {
                mr: "10px",
                mb: "-2px"
            }
        }
    },
    styles: {
        root: {
            fontFamily: 'body',
            overflowX: 'hidden'
        }
    }
}