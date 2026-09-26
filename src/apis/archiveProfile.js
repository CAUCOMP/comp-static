import authAxios from "./authAxios";


export const getOBProfiles = async ({ generation, sort } = {}) => {
  const params = {};

  if (generation) {
    params.generation = Number(generation);
  }

  if (sort) {
    params.sort = sort;
  }

  const response = await authAxios.get("/archive/profile", { params });

  const apiData = response.data;

  const members = apiData.map((item) => ({
    id: item.profileId,
    generation: `${item.generation}기`,
    company: item.company,
    name: item.name,
    description: item.jobTitle, // 설명 대신 직무 사용
    image: item.profileImageUrl, // URL 그대로 사용
    email: item.contact?.email ?? "",
    phone: item.contact?.phone ?? "",
    linkedin: item.contact?.linkedinUrl ?? "",
  }));

  return members
};