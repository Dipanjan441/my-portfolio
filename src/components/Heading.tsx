import {motion} from "motion/react";
import { fadeInUp } from "../features/animation/animations";

interface Props {
    label: string;
}

const DisplayHeading = ({label}: Props) => {
    const labelArray = label.split(" ");
    return (
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp(0)} className='heading'>
            {labelArray.map((label)=> 
            <p key={label}>
                {label}
                &nbsp; 
            </p>
        )}
        </motion.div>
    )
}

export default DisplayHeading;
