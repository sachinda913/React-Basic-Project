import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDescriptions = ['Fundamentals','Crucial','Core'];

function genRandomInt(val){
    return Math.floor(Math.random() * (val + 1));
}
export default function Header(){
    const description = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}