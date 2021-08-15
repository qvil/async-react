import useSWR from "swr";
import { FC } from "react";

import { getData } from "src/api";

interface Props {}

const Profile: FC<Props> = () => {
  const { data } = useSWR("/data", getData(), { suspense: true });

  return <div>Name: {data?.name}</div>;
};

export default Profile;
