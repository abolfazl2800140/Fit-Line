import Axios from "./Instance";

const Get = async ({ url, params: [] }) => {
  const { data } = await Axios.get(url);
  console.log(data);
  return data;
};

export default Get;
