import { useEffect, useState } from "react";
import { Skeleton, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CoachCard from "../../../../components/coachCards";
import { debounce } from "lodash";

const SearchCoach = () => {
  const [show, setShow] = useState(false);
  const [searchedCoach, setSearchedCoach] = useState(null);

  const debouncedTypeHandler = debounce((value) => {
    // console.log(value);
    const filtredItems = data.filter((item) => item.userName.includes(value));
    setSearchedCoach(filtredItems);
  }, 500);

  useEffect(() => {}, [searchedCoach]);

  const fetchUser = async () => {
    const { data } = await axios.get("http://localhost:8000/user");
    const filtredData = data.filter((item) => item.isTrainer === true);
    return filtredData;
  };

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  // const typeHandler = (e) => {
  //   const filtredItems = data.filter((item) =>
  //     item.userName.includes(e.target.value)
  //   );
  //   setSearchedCoach(filtredItems);
  // };

  return (
    <div className="h-full w-full flex flex-col py-4 px-2 gap-4">
      {/* <input type="text" className="border-2 p-4 w-full rounded-xl" /> */}
      {show && (
        <div className="flex-1/12 flex justify-center items-center">
          <TextField
            // label="نام"
            variant="outlined"
            required
            placeholder="نام مربی مورد نظر را وارد کنید"
            // helperText="نام مربی مورد نظر را وارد کنید"
            className="border-2 p-4 w-full rounded-xl"
            onChange={(e) => debouncedTypeHandler(e.target.value)}
          />
        </div>
      )}
      <div
        className={`flex-11/12 flex flex-col overflow-scroll gap-4  ${
          show && "max-h-[500px]"
        } py-4 `}
      >
        {!show ? (
          <>
            <Skeleton
              animation="wave"
              variant="rounded"
              width={"100%"}
              height={80}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              width={"100%"}
              height={80}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              width={"100%"}
              height={80}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              width={"100%"}
              height={80}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              width={"100%"}
              height={80}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              width={"100%"}
              height={80}
            />
          </>
        ) : searchedCoach ? (
          <>
            {searchedCoach.map((item) => (
              <CoachCard item={item} />
            ))}
          </>
        ) : (
          data?.map((item) => {
            return <CoachCard item={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default SearchCoach;
