<h1 align="center">
  💸 FreeAinize.js
</h1>

<p align="center">
    <p align="center">Call LLM APIs with Ainize Free. </p>
</p>
## Introduction
This project provides blockchain-based solutions using various models available for free through Ainize. The models operate on GPUs supported by LLM FUNDING. To enhance user convenience, we have simplified complex processes such as blockchain network setup.

## Key Features
1. **Automatic Wallet Creation**:
    - A new blockchain account is automatically created when the SDK starts.
    - You can inject a fixed address during Ainize creation if you prefer to use a constant address.

2. **Access to Company Models**:
    - Models provided by the company are available for free only through Ainize.

3. **Simplified Blockchain Knowledge**:
    - Network setup and deposit procedures are simplified for easier user experience.

## Usage
1. **Automatic Wallet Creation**:
    - A new blockchain account is created automatically when the SDK starts.
    - If you want to use a fixed address, inject it during Ainize creation.

2. **Blockchain Accounts**:
    - A new blockchain account is generated each time the project starts.
    - Use a fixed address by specifying it during Ainize creation.

3. **GPU Support**:
    - The provided models are powered by GPUs supported through [LLM FUNDING](link).

4. **Data Security**:
    - Your inference records are stored on the blockchain.
    - Avoid submitting sensitive information.

## Note
- Do not input sensitive data while using the models. All inference records are stored on the blockchain.
  
## Usage

```
npm i @ainize-team/free-llm/api
```

```ts
const FreeAinize = require('@ainize-team/free-llm-api').default;
const main = async () =>{
  const freeAinize = new FreeAinize(0);
  await freeAinize.login();
  const result = await freeAinize.inference("hello world");
  console.log(result)
}
main()
```

# Features

# Supported LLM (2024.08.20)
- gemma2

# Contributing

# Enterprise
