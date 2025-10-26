type Project = {
  id: string;
  name: string;
  description: string;
};

const project: Project = {
  id: "TestProject_",
  name: "Test Project",
  description: "This is a test project",
};

function getProjectValue({ project }: { project: Omit<Project, "id"> }) {
  console.log("project:", project);

  // @ts-expect-error 這個 id 會被 complain
  console.log("project.id:", project.id);
  return project;
}

getProjectValue({ project });

function getProjectIdAndValue({
  project,
}: {
  project: Pick<Project, "id" | "description">;
}) {
  console.log("projectId:", project);
  console.log("projectId.id:", project.id);
  console.log("projectId.description", project.description);
  return project;
}
