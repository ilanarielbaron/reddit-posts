// Parse the Reddit API response to IPost type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseResponse = (response: { data: { children: any[] } }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return response?.data?.children?.map((post: any): IPost => {
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
