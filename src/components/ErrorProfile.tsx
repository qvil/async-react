import useSWR from "swr";
import { FC } from "react";

import { getError } from "src/api";

interface Props {}

const ErrorProfile: FC<Props> = () => {
  const { data } = useSWR("/error", getError, { suspense: true });

  return <div>Name: {data?.name}</div>;
};

export default ErrorProfile;
