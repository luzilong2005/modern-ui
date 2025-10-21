export const injectBanner = () => {
    /**
     * @see https://patorjk.com/software/taag/#p=display&f=ANSI+Shadow
     */
    const banner = `
███╗   ███╗ ██████╗ ██████╗ ███████╗██████╗ ███╗   ██╗    ██╗   ██╗██╗
████╗ ████║██╔═══██╗██╔══██╗██╔════╝██╔══██╗████╗  ██║    ██║   ██║██║
██╔████╔██║██║   ██║██║  ██║█████╗  ██████╔╝██╔██╗ ██║    ██║   ██║██║
██║╚██╔╝██║██║   ██║██║  ██║██╔══╝  ██╔══██╗██║╚██╗██║    ██║   ██║██║
██║ ╚═╝ ██║╚██████╔╝██████╔╝███████╗██║  ██║██║ ╚████║    ╚██████╔╝██║
╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝     ╚═════╝ ╚═╝

@luzilong2005
`;
    const textStyle = `
    font-family: SF Mono, Monaco, Menlo, Consolas, Courier New, monospace;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 1;
    background: linear-gradient(90deg, #0099ff 0%, #14db2c 100%);
    background-clip: text;
    color: transparent;
    `;

    if (__MU_DEV__) {
        console.log("[Modern UI]:dev mode...");
        return;
    }
    if (__MU_PROD__) {
        console.info(`%c${banner}`, textStyle);
        return;
    }
};
