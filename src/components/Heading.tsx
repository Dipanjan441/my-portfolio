import React from 'react'

interface Props {
    label: string;
}

const DisplayHeading = ({label}: Props) => {
    const labelArray = label.split(" ");
    return (
        <div className='heading'>
            {labelArray.map((label)=> 
            <p key={label}>
                {label}
                &nbsp; 
            </p>
        )}
        </div>
    )
}

export default DisplayHeading;
