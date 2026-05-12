const cardSets = [
  {
    id: 1,
    title: "Web Dev Flash Cards",
    cards: [
      { term: "HTML", description: "HyperText Markup Language" },
      { term: "CSS", description: "Cascading Style Sheets " },
      {
        term: "element",
        description:
          "HTML Tags that make up the HTML documents. <h1>, <div>, <p>",
      },
      {
        term: "Attribute",
        description:
          "Properties that are added to an HTML element. src, href, id, class",
      },
      {
        term: "<h1>",
        description: "Headline tag, the largest and most important.",
      },
      {
        term: "<a>",
        description: "Anchor Tag used for hyperlinks",
      },
      {
        term: "class",
        description:
          "html attribute used on to identify multiple elements. Is used as a selector for styles and JavaScript",
      },
      {
        term: "selector",
        description:
          "Used to select elements on a page, can be elements using the tag name, id using a # or class using a . ",
      },
      {
        term: "Box Model",
        description: "Layout tool with margin, padding and borders",
      },
    ],
  },
  {
    id: 2,
    title: "Cloud Certification Flash Cards",
    cards: [
      {
        term: "Continuous Integration",
        description: "Automated build tests run during merge",
      },
      { term: "Microservices", description: "Small single purpose services" },
    ],
  },
  {
    id: 3,
    title: "React",
    cards: [
      {
        term: "Components",
        description: "Reusable module pieces of UI, Java Script functions.",
      },
      {
        term: "Props",
        description:
          "Arguments passed to components that can hold data and functions",
      },
      {
        term: "useState",
        description: "A react hook used to update react state",
      },
      {
        term: "State",
        description: "Object that stores properties for the component",
      },
      {
        term: "useEffect",
        description:
          "React hook used to perform side effects, such as fetching data",
      },
      {
        term: "dependency array",
        description: "Array passed to useEffect to track values",
      },
    ],
  },
  {
    id: 4,
    title: "Python",
    cards: [
      {
        term: "List",
        description:
          "Data-structure that stores a collection of values in sequential order, are mutable",
      },
      {
        term: "Tuple",
        description:
          "Immutable Data-structure that stores a collection of values in sequential order ",
      },
      {
        term: "Sets",
        description:
          "Mutable but only store immutable objects, collection of values non-sequential",
      },
      { term: "String", description: "Text data-type" },
      {
        term: "Logic Operators",
        description: "Used in if, else and else if, conditional statements",
      },
    ],
  },
];
export { cardSets };
