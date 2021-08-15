import useSWR from "swr";
import { FC } from "react";

import { getData } from "src/api";

interface Props {}

const Profile2: FC<Props> = () => {
  const { data } = useSWR("/data2", getData(2000), { suspense: true });

  return <div>Name: {data?.name}</div>;
};

export default Profile2;
