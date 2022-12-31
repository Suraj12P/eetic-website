import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  dataset: "production",
  apiVersion: "2022-02-03",
  token: `${process.env.REACT_APP_EDITOR_TOKEN}`,
  useCdn: true,
});