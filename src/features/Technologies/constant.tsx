import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiMysql, SiMongodb, SiReact } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import ExpressIcon from '../../assets/images/tech/express.png';
import BootstrapIcon from '../../assets/images/tech/bootstrap.png';

export const TechIcon = [
    {id:1, icon: <FaReact color="blue"  size={40}/>, name: "React"},
    {id:2, icon: <FaNodeJs color="green"  size={40}/>, name: "Node.js"},
    {id:3, icon: <SiMysql color="orange" size={40}/>, name: "MySQL" },
    {id:4, icon: <RiNextjsFill color="black" size={40}/>, name: "Next.js"},
    {id:5, icon: <FaWordpress color="blue" size={40}/>, name: "Wordpress"},
    {id:6, icon: <SiMongodb color="green" size={40}/>, name: "Mongodb"},
    {id:7, icon: <SiReact color="blue" size={40}/>, name: "React Native"},
    {id:8, icon: <img src={ExpressIcon} height={40}/>, name: "Express.js"},
    {id:8, icon: <img src={BootstrapIcon} height={40}/>, name: "Bootstrap"},
]