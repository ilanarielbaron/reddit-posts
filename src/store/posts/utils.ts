// Parse the Reddit API response to IPost type
export const parseResponse = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: { data: { children: any[] } },
  postsCount: number
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return response?.data?.children?.map((post: any, index: number): IPost => {
    const {
      title,
      name: fullname,
      author,
      created,
      thumbnail,
      num_comments: commentsCount,
    } = post.data;

    const hoursAgoCreated = Math.round(
      (Date.now() - created * 1000) / (60000 * 60)
    );

    return {
      index: postsCount + index,
      title,
      fullname,
      author,
      entryDate: hoursAgoCreated.toString(),
      commentsCount,
      disable: false,
      isRead: false,
      image: thumbnail,
    };
  });
};
