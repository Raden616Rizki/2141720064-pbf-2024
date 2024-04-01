import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function ContactPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>My Contact</Heading>
            <Post title="Raden Rizki Contact" body="NIM: 2141720064 | Phone: +628501042024 | E-mail: radenrizki404@gmail.com"/>
        </Section2>
    );
}
