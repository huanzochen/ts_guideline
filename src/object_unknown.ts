function getProjectSetting({ raw }: { raw: object }) {
  console.log("raw:", raw);
  return raw;
}

function getProjectSetting2({ raw }: { raw: unknown }) {
  console.log("raw:", raw);
  return raw;
}

function getProjectSetting3({ raw }: { raw: any }) {
  console.log("raw:", raw);
  return raw;
}
