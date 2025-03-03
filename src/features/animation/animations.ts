import { Variants } from "motion/dist/react";

export const slideInLeft = (delay: number): Variants => ({
    hidden: {opacity: 0, x: -50},
    visible: {opacity: 1, x: 0,
        transition: {duration: 0.5, ease: 'anticipate',delay: delay}
    }
})

export const slideInRight = (delay: number): Variants => ({
    hidden: {opacity: 0, x: 50},
    visible: {opacity: 1, x: 0,
        transition: {duration: 0.5, ease: 'anticipate',delay: delay}
    }
})

export const fadeInUp = (delay: number): Variants => ({
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0,
        transition: {duration: 0.4, ease: 'anticipate',delay: delay}
    }
})
