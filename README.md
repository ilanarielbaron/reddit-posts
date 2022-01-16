# Reddit Challenge

## Live site link

https://reddit-challenge.netlify.app/

## Notes

- I used create react app with typescript template because Next JS has more features for performance, SEO and production sites. This way is faster for me to do a challenge application.
- I added the dependencies like redux sagas because i like the way it works using generators and running in the middleware. It gives me the possibility to make asynchronous calls queuing the results for the posts fetches.
- In my first version i want to make it simple and fetch every time the user require for more post, then i want to get the next page already fetched when the user requires more. Finally i think is not delaying for fetching every time, so i will keep it like that.
- First i will do the priority functionality and layout and then the secondary like animations / transitions.
- For layout and styles i implemented the mobile first way
- Added tests for reducer, sagas and selectors, i prioritized that rather than component testing first.
- For the styles i did a simple UI very easy to manipulate with light backgrounds and big font sizes.
