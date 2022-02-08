export const projectsData = [
    {
        backstyle: "dark",
        textstyle: "light",
        heading: "Academic and Professional",
        paragraph: "Here's a list of some of my academic and professional projects.These also include projects that I've created for various hackathons",
        cards: [
            {
                image:"/images/mnist.png",
                imagealt:"MNIST Numbers",
                title: "MNIST Classifier",
                subtitle: "Foundations of Machine Learning",
                text: "Used Google TPUs to develop and accelerate a Neural Network Classifier for the MNIST Numbers dataset. Achieved upto 98.5% accuracy.",
            },
            {
                image:"/images/cifar.png",
                imagealt:"CIFAR-10 Images",
                title: "CIFAR-10 Classifier",
                subtitle: "Foundations of Machine Learning",
                text: "Used Google TPUs to develop and accelerate a Neural Network Classifier for the CIFAR-10 images dataset. Achieved upto 75% accuracy even with a relatively simple model.",
            },
            {
                image:"/images/nodejs.svg",
                imagealt:"NodeJS",
                title: "CSE 486 - Tiny Video Player",
                subtitle: "Capstone 2",
                text: "Developed tiny media slideshow players using Raspberry Pis, NodeJS, and python.",
                buttontext: "Demo Website",
                buttonlink: "https://vplayer-raspberrypi-website.herokuapp.com",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                image:"/images/swift.svg",
                imagealt:"Swift",
                title: "CSE 335 - Location/Tasks",
                subtitle: "Principles of Mobile App Dev",
                text: "Created a prototype for an iOS/iPadOS app that groups user based tasks based on their location, displays them based on driving time from user. Syncs data across all devices using iCloud."
            },
            {
                image:"/images/mlh.svg",
                imagealt:"Sunhacks 2019",
                title: "Hackathon project for 'best UI design'",
                subtitle: "Sunhacks 2019",
                text: "Created a project utilizing sms, firebase APIs for 'best UI design'.",
                buttontext: "Project Website",
                buttonlink: "https://sunhacks2019.herokuapp.com",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                image:"/images/devilsinvent.svg",
                imagealt:"Devils Invent",
                title: "Hackathon app for the auditory/visually impaired",
                subtitle: "Devils Invent 2019: Dealer's Choice",
                text: "Created a prototype for a video app that utilized OpenCV to translate ASL to english and vice-versa, and Text-To-Speech."
            },
            {
                image:"/images/devilsinvent.svg",
                imagealt:"Devils Invent",
                title: "Hackathon project for Smart Vertical Farming System",
                subtitle: "Devils Invent 2019: Invent for the planet",
                text: "Created mockups for a smart vertical farm. Used technologies like Arduino, IoT, etc. to create a better, sustainable urban farm."
            },
        ]
    },
    {
        backstyle: "light",
        textstyle: "dark",
        heading: "Personal",
        paragraph: "Here's a list of some of my personal projects.",
        cards: [
            {
                image:"/images/ubuntu.svg",
                imagealt:"Ubuntu Server",
                title: "Home Network System",
                subtitle: "Software and Hardware setup",
                text: "Set up home network with Smart Home Systems, Media, and Storage servers. Runs on redundant Ubuntu systems. Supports popular platforms like HomeKit, Alexa, etc.",
            },
            {
                image:"/images/nodejs.svg",
                imagealt:"NodeJS",
                title: "Yelpcamp!",
                subtitle: "The Web Developer Bootcamp",
                text: "Created a basic dummy campgrounds website to help learn JS and better understand UI design principles."
            },
            {
                image:"/images/react.svg",
                imagealt:"ReactJS",
                title: "Internal Home Website",
                subtitle: "Home Network Management",
                text: "Made a website served internally to home network for managing different aspects of the smart home system. Accessible locally only."
            },
            {
                image:"/images/esp8266.jpg",
                imagealt:"ESP8266",
                title: "Smart Home System",
                subtitle: "Electric Control Devices",
                text: "Created the software to enable existing lights to be controlled using ESP8266 devices by HomeKit, Amazon Alexa, IFTTT, etc."
            },
            {
                image:"/images/rpi.png",
                imagealt:"Raspberry Pi",
                title: "Home Surveillance System",
                subtitle: "Camera Recording and Streaming",
                text: "Integrated existing projects for the Raspberry Pi into a custom program for In-Home Surveillance. Capable of HomeKit Secure Video, Local Recording"
            }
        ]
    },
    {
        backstyle: "dark",
        textstyle: "light",
        heading: "Languages",
        paragraph: "Some of the programming languages I've worked with over the course of my academic, professional, and personal projects.",
        cards: [
            {
                image: "/images/cpp.svg",
                imagealt: "CPP",
                title: "C/C++",
                subtitle: "The C, C++ programming languages",
                text: "Used in both academic and personal projects.",
                buttontext: "C++",
                buttonlink: "https://isocpp.org",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                image: "/images/java.svg",
                imagealt: "Java",
                title: "Java",
                subtitle: "The Java programming language, along with JavaFX, JUnit5",
                text: "Used in both academic and personal projects.",
                buttontext: "Java",
                buttonlink: "http://oracle.com/java/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                image: "/images/javascript.svg",
                imagealt: "JavaScript",
                title: "JavaScript",
                subtitle: "In conjunction with HTML/CSS and multiple frameworks",
                text: "Used in academic, professional, and personal projects.",
                buttontext: "JavaScript",
                buttonlink: "http://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                image: "/images/python.svg",
                imagealt: "Python",
                title: "Python",
                subtitle: "Python, along with MicroPython, and CircuitPython",
                text: "Used in academic, professional, and personal projects.",
                buttontext: "Python",
                buttonlink: "https://www.python.org/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                image: "/images/swift.svg",
                imagealt: "Swift",
                title: "Swift",
                subtitle: "Swift, with Storyboard UIs and UIKit",
                text: "Used in academic and personal projects.",
                buttontext: "Swift",
                buttonlink: "https://www.swift.org/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            }
        ]
    },
    {
        backstyle: "light",
        textstyle: "dark",
        heading: "Frameworks and tools",
        paragraph: "Over the course of all my projects, I've used the a lot of frameworks and tools. Here are just some of them.",
        cards: [
            {
                height: 19,
                innerheight: 9,
                image: "/images/cloudflare.svg",
                imagealt: "Cloudflare",
                title: "Cloudflare",
                subtitle: "Workers, Pages, DNS, Registrar",
                buttontext: "Cloudflare",
                buttonlink: "https://www.cloudflare.com/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                height: 19,
                innerheight: 9,
                image: "/images/aws.svg",
                imagealt: "Amazon Web Services",
                title: "Amazon Web Services",
                subtitle: "Cloud Hosting",
                buttontext: "AWS",
                buttonlink: "https://aws.amazon.com",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                height: 19,
                innerheight: 9,
                image: "/images/gcp.svg",
                imagealt: "Google Cloud Platform",
                title: "Google Cloud Platform",
                subtitle: "Cloud Hosting",
                buttontext: "GCP",
                buttonlink: "https://cloud.google.com/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                height: 19,
                innerheight: 9,
                image: "/images/azure.svg",
                imagealt: "Microsoft Azure",
                title: "Microsoft Azure",
                subtitle: "Cloud Hosting",
                buttontext: "Azure",
                buttonlink: "https://azure.microsoft.com/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                height: 19,
                innerheight: 9,
                image: "/images/nodejs.svg",
                imagealt: "NodeJS",
                title: "NodeJS",
                subtitle: "JavaScript",
                buttontext: "NodeJS",
                buttonlink: "https://nodejs.org/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                height: 19,
                innerheight: 9,
                image: "/images/react.svg",
                imagealt: "ReactJS",
                title: "ReactJS",
                subtitle: "JavaScript",
                buttontext: "ReactJS",
                buttonlink: "https://reactjs.org/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                height: 19,
                innerheight: 9,
                image: "/images/nextjs.svg",
                imagealt: "NextJS",
                title: "NextJS",
                subtitle: "JavaScript",
                buttontext: "NextJS",
                buttonlink: "https://nextjs.org/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                height: 19,
                innerheight: 9,
                image: "/images/github.svg",
                imagealt: "GitHub",
                title: "GitHub",
                subtitle: "Cloud git hosting",
                buttontext: "GitHub",
                buttonlink: "https://github.com/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                height: 19,
                innerheight: 9,
                image: "/images/xcode.png",
                imagealt: "Xcode",
                title: "Xcode",
                subtitle: "IDE",
                buttontext: "Xcode",
                buttonlink: "https://developer.apple.com/xcode/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                height: 19,
                innerheight: 9,
                image: "/images/vscode.svg",
                imagealt: "Visual Studio Code",
                title: "Visual Studio Code",
                subtitle: "IDE",
                buttontext: "VSCode",
                buttonlink: "https://code.visualstudio.com/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
            {
                height: 19,
                innerheight: 9,
                image: "/images/tensorflow.svg",
                imagealt: "Google TensorFlow",
                title: "Google TensorFlow",
                subtitle: "AI/ML Acceleration",
                buttontext: "TensorFlow",
                buttonlink: "https://www.tensorflow.org/",
                buttonglow: false,
                buttonclass: "btn btn-primary container-fluid"
            },
        ]
    },
]