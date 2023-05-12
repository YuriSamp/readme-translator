## How it works

It uses a Chat-GPT api to translate your readme for any language you want

## Running Locally

### Cloning the repository the local machine.

```bash
git clone https://github.com/YuriSamp/readme-translator
```

### Creating a account on OpenAi to get an API key.

1. Go to [OpenAi](https://platform.openai.com) to make an account.
2. Click on your profile picture in the top right corner, and click on "View API keys", if you are a lucky person you will get a free tier.
3. If this wans't your case go manage accuont >> billing, and setup a credit card
4. Repeat the second instruction and grab your key

### Storing the API keys in .env

Create a file in root directory of project with env. And store your API key in it, as shown in the .example.env file.

### Installing the dependencies.

```bash
npm install
```

### Running the application.

Then, run the application in the command line and it will translate your read-me

```bash
translate-me
```
