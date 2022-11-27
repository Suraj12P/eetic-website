export default {
  name: "event",
  type: "document",
  title: "Event",
  fields: [
    {
      name: "event_name",
      type: "string",
      title: "Event Name",
    },
    {
      name: "host_name",
      type: "string",
      title: "Host Name",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "startDate",
      type: "datetime",
      title: "Start Date",
    },
    {
      name: "endDate",
      type: "datetime",
      title: "End Date",
    },
    {
      name: "isOffline",
      type: "boolean",
      title: "Offline",
    },
    {
      name: "registration_link",
      type: "string",
      title: "Registration Link",
    },
    {
      name: "venue",
      type: "string",
      title: "Venue",
    },
    {
      name: "poster_url",
      type: "image",
      title: "Poster",
    },
    {
      name: "yt",
      type: "string",
      title: "YouTube Link",
    },
  ],
};
