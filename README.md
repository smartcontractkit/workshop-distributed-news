# Based On: Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

## 🚀 Project Structure

Inside of your project, you'll see the following folders and files:

```text
/
├── public/
├── ref/
    └── newsArchive.sol
├── src/
    └── lib/
        └── newsArchive.js
        └── newsArchiveABI.json
        └── newsArchive.sol
│   └── pages/
│       └── index.astro
└── package.json
```

Files in the `ref/` directory are intended as reference. In this example `newArchive.sol` will need to be deployed separately.

Files in the `src/lib/` directory are used as imports. 

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.



## ⚙️ Setup
    To run this project locally please clone it to your machine.
    Next, `npm install` and install dependencies.
    Rename `example.env` to `.env` and fill in the contract address.
    **NOTE** The RPC url provided in `example.env` is for Etherum Sepolia, if you are using a different network you will need to change this value.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |


This tutorial represents an educational example to use a Chainlink system, product, or service and is provided to demonstrate how to interact with Chainlink’s systems, products, and services to integrate them into your own. This template is provided “AS IS” and “AS AVAILABLE” without warranties of any kind, it has not been audited, and it may be missing key checks or error handling to make the usage of the system, product or service more clear. Do not use the code in this example in a production environment without completing your own audits and application of best practices. Neither Chainlink Labs, the Chainlink Foundation, nor Chainlink node operators are responsible for unintended outputs that are generated due to errors in code.