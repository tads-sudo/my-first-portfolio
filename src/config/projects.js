import { TECHNOLOGIES } from "../constants";

export const projectCategories = {
  categories: [
    {
      id: TECHNOLOGIES.HTML.id,
      label: TECHNOLOGIES.HTML.label,
    },
    {
      id: TECHNOLOGIES.JAVASCRIPT.id,
      label: TECHNOLOGIES.JAVASCRIPT.label,
    },
    {
      id: TECHNOLOGIES.REDUX.id,
      label: TECHNOLOGIES.REDUX.label,
    },
    {
      id: TECHNOLOGIES.REACT.id,
      label: TECHNOLOGIES.REACT.label,
    },
    {
      id: TECHNOLOGIES.NODEJS.id,
      label: TECHNOLOGIES.NODEJS.label,
    },
    {
      id: TECHNOLOGIES.MONGODB.id,
      label: TECHNOLOGIES.MONGODB.label,
    },
    {
      id: TECHNOLOGIES.REACTBOOTSTAP.id,
      label: TECHNOLOGIES.REACTBOOTSTAP.label,
    },
    {
      id: TECHNOLOGIES.REACTROUTER.id,
      label: TECHNOLOGIES.REACTROUTER.label,
    },
    {
      id: TECHNOLOGIES.REACTSTRAP.id,
      label: TECHNOLOGIES.REACTSTRAP.label,
    },
    {
      id: TECHNOLOGIES.EXPRESSJS.id,
      label: TECHNOLOGIES.EXPRESSJS.label,
    },
    {
      id: TECHNOLOGIES.SHOWALL.id,
      label: TECHNOLOGIES.SHOWALL.label,
    },
  ],
};

export const projects = [
  {
    heading: "PROSHOPAV",
    subheading:
      "Custom eCommerce platform with React, Redux, Node, Express & MongoDB",
    description:
      "This is my output from a jump in and get your hands dirty course by Brad Traversy. Proshopav is a customized eCommerce / shopping cart web application with MERN stack with the following functionality:",
    functionalities: [
      "Full featured shopping cart",
      "Product reviews and ratings",
      "Top products carousel",
      "Product pagination",
      "Product search feature",
      "User profile with orders",
      "Admin product management",
      "Admin user management",
      "Admin order details page",
      "Checkout process(shipping, payment method, etc)",
      "Paypal / credit card integration",
      "Custom database seeder script",
    ],
    link: {
      label: "VISIT SITE",
      href: "http://proshopav.herokuapp.com",
    },
    technologies: [
      {
        id: TECHNOLOGIES.HTML.id,
        label: TECHNOLOGIES.HTML.label,
      },
      {
        id: TECHNOLOGIES.CSS.id,
        label: TECHNOLOGIES.CSS.label,
      },
      {
        id: TECHNOLOGIES.JAVASCRIPT.id,
        label: TECHNOLOGIES.JAVASCRIPT.label,
      },
      {
        id: TECHNOLOGIES.REACT.id,
        label: TECHNOLOGIES.REACT.label,
      },
      {
        id: TECHNOLOGIES.REDUX.id,
        label: TECHNOLOGIES.REDUX.label,
      },
      {
        id: TECHNOLOGIES.EXPRESSJS.id,
        label: TECHNOLOGIES.EXPRESSJS.label,
      },
      {
        id: TECHNOLOGIES.NODEJS.id,
        label: TECHNOLOGIES.NODEJS.label,
      },
      {
        id: TECHNOLOGIES.REACTBOOTSTAP.id,
        label: TECHNOLOGIES.REACTBOOTSTAP.label,
      },
      {
        id: TECHNOLOGIES.REACTROUTER.id,
        label: TECHNOLOGIES.REACTROUTER.label,
      },
      {
        id: TECHNOLOGIES.MONGODB.id,
        label: TECHNOLOGIES.MONGODB.label,
      },
    ],
    images: [
      {
        src: "/assets/images/proshop1.png",
        alt: "proshop image 1",
      },
      {
        src: "/assets/images/proshop2.png",
        alt: "proshop image 2",
      },
    ],
  },
  {
    heading: "AMPC",
    subheading: "Phirst Park Homes affordable house and lot investment.",
    description:
      "APC is a personal website owned by an international territorial specialist of Phirst Park Homes Incorporated. This website:",
    functionalities: [
      "Helps the owner to promote the entire range of the company products and services while ensuring the customers needs and expectations are met by the company.",
      "Will allow all current and potential home buyers to get in touch and get the  information at anytime and anywhere.",
      "Is responsive web application.",
    ],
    link: {
      label: "VISIT SITE",
      href: "https://ampc.herokuapp.com/",
    },
    technologies: [
      {
        id: TECHNOLOGIES.HTML.id,
        label: TECHNOLOGIES.HTML.label,
      },
      {
        id: TECHNOLOGIES.CSS.id,
        label: TECHNOLOGIES.CSS.label,
      },
      {
        id: TECHNOLOGIES.JAVASCRIPT.id,
        label: TECHNOLOGIES.JAVASCRIPT.label,
      },
      {
        id: TECHNOLOGIES.REACT.id,
        label: TECHNOLOGIES.REACT.label,
      },
      {
        id: TECHNOLOGIES.REACTSTRAP.id,
        label: TECHNOLOGIES.REACTSTRAP.label,
      },
      {
        id: TECHNOLOGIES.REACTROUTER.id,
        label: TECHNOLOGIES.REACTROUTER.label,
      },
    ],
    images: [
      {
        src: "/assets/images/apc.png",
        alt: "Ampc image",
      },
    ],
  },
];
