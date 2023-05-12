#! /usr/bin/env node

import * as dotenv from 'dotenv';

//Place your absolute path here
dotenv.config({ path: '../../nodeJS/translate/.env' });

import { readFile, writeFile } from 'fs';
import { Configuration, OpenAIApi } from 'openai';
import { input } from '@inquirer/prompts';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const language = await input({
  message: 'Select the language you want translate : ',
});

async function translate() {
  readFile('./README.md', 'utf-8', async (err, data) => {
    if (err) {
      throw err.message;
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo-0301',
      messages: [
        {
          role: 'user',
          content: `Please translate this readme in markdown ${data}, to ${language}`,
        },
      ],
      temperature: 0.1,
      max_tokens: 1000,
    });

    writeFile(
      './README.md',
      response.data.choices[0].message.content,
      (err, _) => console.log(err)
    );
  });
}

translate();
