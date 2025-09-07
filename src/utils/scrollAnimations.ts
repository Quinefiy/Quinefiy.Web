import { animate, inView } from "motion";


export const initScrollAnimations = () => {

    inView(".animate-left-on-scroll", (el: any) => {
        animate(el, {
            x: [ -100 , 0],
            opacity: [0, 1]
        }, {
            duration: 0.6,
            delay: parseFloat(el.dataset.delay || "0"),
            ease: "easeInOut",
        });
    });
    inView(".animate-right-on-scroll", (el: any) => {
        animate(el, {
            x: [100, 0],
            opacity: [0, 1]
        }, {
            duration: 0.6,
            delay: parseFloat(el.dataset.delay || "0"),
            ease: "easeInOut",
        });
    });
    inView(".animate-hero-on-scroll", (el: any) => {
        animate(el, {
            x: [100, 0],
            opacity: [0, 1]
        }, {
            duration: 0.8,
            delay: parseFloat(el.dataset.delay || "0"),
            ease: "easeInOut",
        });
    });
    inView(".animate-up-on-scroll", (el: any) => {
        animate(el, {
            y: [100, 0],
            opacity: [0, 1]
        }, {
            duration: 0.6,
            delay: parseFloat(el.dataset.delay || "0"),
            ease: "easeInOut",

        });
    });
    inView(".animate-down-on-scroll", (el: any) => {
        animate(el, {
            y: [-100, 0],
            opacity: [0, 1]
        }, {
            duration: 0.6,
            delay: parseFloat(el.dataset.delay || "0"),
            ease: "easeInOut",
        });
    });
    inView(".animate-down-rotate-on-scroll", (el: any) => {
        animate(
            el,
            {
                y: [-200, 0],
                rotate: [135, 0],
                opacity: [0, 1],
            },
            {
                duration: 1.5,
                delay: parseFloat(el.dataset.delay || "0"),
                ease: "easeInOut"
            }
        );
    });
    inView(".animate-shift-rotate-on-scroll", (el: any) => {
        animate(
            el,
            {
                x: [120, 0],
                rotate: [135, 0],
                opacity: [0, 1],
            },
            {
                duration: 1.5,
                delay: parseFloat(el.dataset.delay || "0"),
                ease: "easeInOut"
            }
        );
    });
    inView(".animate-svg-on-scroll", (el: any) => {
        animate(
            el,
            {
                scale: [0, 1],
                opacity: [0, 1],
            },
            {
                duration: 0.4,
                delay: parseFloat(el.dataset.delay || "0"),
                ease: "easeInOut"
            }
        );
    });
    inView(".animate-first-meal-on-scroll", (el: any) => {
        animate(
            el,
            {
                x: [-150, 0],
                rotate: [45, 0],
                opacity: [0, 1],
            },
            {
                duration: 1,
                delay: parseFloat(el.dataset.delay || "0"),
                ease: "easeInOut"
            }
        );
    });
    inView(".animate-second-meal-on-scroll", (el: any) => {
        animate(
            el,
            {
                x: [150, 0],
                rotate: [-45, 0],
                opacity: [0, 1],
            },
            {
                duration: 1,
                delay: parseFloat(el.dataset.delay || "0"),
                ease: "easeInOut"
            }
        );
    });
    inView(".animate-third-meal-on-scroll", (el: any) => {
        animate(
            el,
            {
                y: [-150, 0],
                rotate: [45, 0],
                opacity: [0, 1],
            },
            {
                duration: 1,
                delay: parseFloat(el.dataset.delay || "0"),
                ease: "easeInOut"
            }
        );
    });
}
