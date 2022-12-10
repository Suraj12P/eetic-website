export default {
  name: "careers",
  type: "document",
  title: "Careers",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "desc",
      type: "string",
      title: "Description",
    },
    {
      name: "link",
      type: "string",
      title: "Registration Link",
    },
    {
      name: "poster",
      type: "image",
      title: "Poster",
    },
    {
      name: "disabled",
      type: "boolean",
      title: "Closed",
      default: false,
    },
  ],
};
