<h1 align="center">
  FreeAinize.js
</h1>

<p align="center">
  <strong>Call LLM APIs with Ainize for Free</strong><br>
  Blockchain-powered AI inference made simple
</p>

## Introduction

FreeAinize.js provides blockchain-based solutions using various language models available for free through Ainize. These models offer powerful AI capabilities without the complexity of traditional blockchain setups.

## Key Features

1. **Automatic Wallet Creation**: A new blockchain account is generated each time the SDK starts.
2. **Access to Premium Models**: Company-provided models are available for free exclusively through Ainize.
3. **Simplified Blockchain Integration**: Network setup and deposit procedures are abstracted away for ease of use.
4. **Blockchain-Powered Inference**: Your inference requests are processed and recorded on the blockchain.

## Installation

```bash
npm install @ainize-team/free-llm-api
# or
yarn add @ainize-team/free-llm-api
```

## Usage

```javascript
const FreeAinize = require('@ainize-team/free-llm-api').default;

const main = async () => {
  const freeAinize = new FreeAinize(0);
  await freeAinize.login();
  const result = await freeAinize.inference("Hello, world!");
  console.log(result);
}

main();
```

## Supported Models (as of 2024-10-20)

- llama-3.11 8B (Text-only support for this multimodal model)

## Important Notes

- **Data Privacy**: Inference records are stored on the blockchain. Avoid submitting sensitive information.
- **Service Stability**: This service may be discontinued at any time. Check the repository for status updates.
- **Resource Limitations**: Performance may degrade during high-traffic periods due to shared infrastructure.
- **Fixed Address**: To use a constant blockchain address, inject it during Ainize creation.

## Blockchain Integration

- Inference is processed through the Ainize network.
- A new blockchain account is created for each session unless a fixed address is provided.

## Contributing




## Join the Community

Have questions or want to discuss FreeAinize.js? Join our [Arena](https://arena.ainize.ai) community!

---

<p align="center">
  Powered by <a href="https://github.com/ainize-team/ainize-js">Ainize</a> | Built by the Ainize Team
</p>
