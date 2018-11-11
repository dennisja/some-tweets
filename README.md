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

   Add a .env file in the root directory of the application which is similar to the [example .env file](.envexample)

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

   > If you are running it the first time, you need to build the application

   ```
   yarn build-and-serve
   ```

   > If you are running it after a build

   ```
   yarn serve
   ```

5. Running tests

   ```sh
   yarn test
   ```

   > We use jest under the hood hence the command accepts all other [jest cli options](https://jestjs.io/docs/en/cli)
