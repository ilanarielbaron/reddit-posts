import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPostsRequest } from "../../store/posts/actions";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequest({ isFirstFetch: true }));
  }, [dispatch]);

  return <div>Hello World</div>;
};
