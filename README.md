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

| Command       | Action                                      |
| :------------ | :------------------------------------------ |
| `npm install` | Installs dependencies                       |
| `npm run dev` | Starts local dev server at `localhost:4321` |

## DISCLAIMER

This tutorial represents an educational example to use a Chainlink system, product, or service and is provided to demonstrate how to interact with Chainlink’s systems, products, and services to integrate them into your own. This template is provided “AS IS” and “AS AVAILABLE” without warranties of any kind, it has not been audited, and it may be missing key checks or error handling to make the usage of the system, product or service more clear. Do not use the code in this example in a production environment without completing your own audits and application of best practices. Neither Chainlink Labs, the Chainlink Foundation, nor Chainlink node operators are responsible for unintended outputs that are generated due to errors in code.

Disclaimer: Please note, this repo contains community examples only  — these are not Chainlink products or services and are not supported or maintained by Chainlink. This code represents an example of using a Chainlink product or service, and is intended for demonstration and educational purposes only. It is provided “AS IS” and “AS AVAILABLE” without warranties of any kind, may not have been audited, and may omit checks or error handling. Each party intending to use this example code does so entirely at their own risk and must perform its own audits, security and code review, key management, and testing before any production deployment and ensure the operation and performance of such code matches expectations. Neither Chainlink Labs nor the Chainlink Foundation deploys, operates, monitors, maintains or endorses any deployment of this code. Note that this is not a Chainlink product, feature or service, and there are no commitments made with respect to the code, including compatibility with future Chainlink releases. You should not rely on this code without first conducting your own technical, engineering, and security review. This code is also outside the scope of any Chainlink bug bounty programs. Neither Chainlink Labs, the Chainlink Foundation, nor Chainlink node operators are responsible for outcomes due to errors in this example or how it is deployed or operated, or liable for any resulting claims or damages. Use of the Chainlink Network is subject to the Chainlink Foundation [Terms of Service](https://chain.link/terms), which provides important information and disclosures. By using this code, you acknowledge and agree to these terms.
