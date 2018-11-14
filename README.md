# some-tweets

It Just fetches the last 30 tweets of only three accounts

## Setting up the application

1. Clone the repository and move to the root directory of the application

```sh
git clone https://github.com/dennisja/some-tweets.git
cd some-tweets
```

2. Install dependencies

```sh
yarn
```

3. Add twitter consumer api key and consumer api secret key

   This can either be done using a dotenv file or setting environment variables as discussed below.

   > I would recommend adding a dotenv file as its easier and scalable

   - Using a .env file

   Add a .env file in the backend directory of the application which is similar to the [example .env file](backend/.env.example)

   - Setting Environment variables

   Set the API_KEY and API_SECRET environment variables via the command line i.e

   > if you are using a unix based OS

   ```sh
   export API_KEY=YOUR_TWITTER_CONSUMER_API_KEY
   export API_SECRET=YOUR_TWITTER_CONSUMER_API_SECRET_KEY
   ```

   > If you are using windows

   ```sh
   set API_KEY=YOUR_TWITTER_CONSUMER_API_KEY
   set API_SECRET=YOUR_TWITTER_CONSUMER_API_SECRET_KEY
   ```

4. Run the application

   ```sh
   yarn serve
   ```

5. Running tests

   ```sh
   yarn test
   ```

   > We use jest under the hood hence the command accepts all other [jest cli options](https://jestjs.io/docs/en/cli)

## Features

- Click on Read More or See on Twitter to go the website containing extra details or the original tweet if its a retweet
- Click on Twitter Icon to visit tweet on Twitter
- Double click on heading to see tweets in a reverse order
- Display Images for tweets which have images
- Click on the edit button to change layout settings

## Features I would like to add but I may not have time to do 😎

- Add auto refreshing of tweets
- Drag and Drop columns to change their order & persisting their order on refresh
- A Better Loader and better control of loading states
- Do some good Error Handling & notify users when network is down
- Make the dark theme look better 😀
- Make usernames and hashtags link to twitter profiles and hashtag pages 🎉
- Make UI mobile friendly
