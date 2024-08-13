# GitHub Profile Counter Bot

This is a simple bot created using Playwright to increase the view count on your GitHub profile.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/irkhamA/playwright-bot.git
    cd gplaywright-bot
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Edit the `config.js` file to set your GitHub profile URL:
    ```javascript
    module.exports = {
        baseURL: 'https://github.com'
    };
    ```
2. Install Requirements:
    ```bash
    npm install
    ```

3. Run the bot:
    ```bash
    npx playwright test
    ```

## How It Works

The bot uses Playwright to automate a browser and repeatedly visits your GitHub profile, which should increase your profile view count. 

## Note

Using automated means to artificially inflate profile view counts may violate GitHub's terms of service. Use this bot responsibly.

