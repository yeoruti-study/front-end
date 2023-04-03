import React, { useEffect } from "react";
import RecentRecord from "../components/RecentRecord/RecentRecord";
import { useUserRecordListGet } from "../hooks/react_query_hooks/useRecord";
import localConsole from "../utils/localConsole";

const RecentRecordContainer = () => {
  const { data, status } = useUserRecordListGet();
  useEffect(() => {
    if (status === "success") localConsole?.log(data?.data.data);
  }, [status]);
  return <RecentRecord recordList={data?.data.data} />;
};

export default RecentRecordContainer;
