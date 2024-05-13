import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "gPBNxW2MwKdiuUy83Wy1Q1",  // ID of a project you are using
      token: "Z7mwOBr1dkDzTleWR6zKLvS9ubjWCZwj3qXR7AiRYGY7qSI5BVXMd8s64EMh01Dd9ZFvyAs6LgatrXALoQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
