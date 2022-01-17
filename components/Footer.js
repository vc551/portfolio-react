import FooterIcon from "./FooterIcon"

export default function Footer(props) {
    return (
        <footer className={`fixed-bottom bg-${props.style} ${props?.other}`}>
            <div className='d-grid align-items-center p-4'>
                <div className='row'>
                    <FooterIcon
                        link="https://www.linkedin.com/in/vc551/"
                        filename="linkedin.svg"
                        style={props.style}
                    />
                    <FooterIcon
                        link="https://github.com/vc551"
                        filename="github.svg"
                        style={props.style}
                    />
                    <FooterIcon
                        link="https://instagram.com/vc551"
                        filename="instagram.svg"
                        style={props.style}
                    />
                    <FooterIcon
                        link="https://twitter.com/_vc551"
                        filename="twitter.svg"
                        style={props.style}
                    />
                    <FooterIcon
                        link="https://www.youtube.com/channel/UCn1hLLylwOJz-FuknhEUPxQ/"
                        filename="youtube.svg"
                        style={props.style}
                    />
                </div>
            </div>
        </footer>
    )
}