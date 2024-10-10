<h1 align="center">
FreeAinize.js
</h1>

<p align="center">
<strong>Call LLM APIs with Ainize for Free</strong><br>
Web3-powered AI inference made simple with llama 3.2 90B
</p>

## 📘 Introduction

**FreeAinize.js** provides Web3-based solutions using advanced language models such as **llama 3.2 90B**, available for free through Ainize. This multimodal model, currently supporting **text-only inferences**, offers powerful AI capabilities without requiring complex blockchain setups. Start using **meta-llama/Llama-3.2-90B-Vision-Instruct** through our API for your text-based AI needs.

## 🦙 How to use **Llama-3.2-90B-Vision-Instruct** FOR FREE

**Install Package**

```bash
npm install @ainize-team/free-llm-api
# or
yarn add @ainize-team/free-llm-api
```

**Usage**

```bash
const FreeAinize = require('@ainize-team/free-llm-api').default;

const main = async () => {
  const freeAinize = new FreeAinize(0);
  await freeAinize.login();
  const result = await freeAinize.inference("Hello, world! This is llama 3.2 90B.");
  console.log(result);
}

main();
```

## ✨ Key Features

1. **Automatic Wallet Creation**: A new blockchain account is generated each time the SDK starts, If you want to use a fixed address, inject it during Ainize creation.
2. **Access to Premium Models**: Use the **Llama-3.2-90B-Vision-Instruct** model for free, exclusively through Ainize.
3. **Simplified Blockchain Integration**: Blockchain setup and network procedures are handled automatically for ease of use.
4. **Web3-Powered Inference**: All inference requests, including those with **Llama-3.2-90B-Vision-Instruct**, are processed and recorded on the blockchain.

## ⚠️ Important Notes

- **Data Transparency and Security**: All inference records, including those from **Llama-3.2-90B-Vision-Instruct** , are securely stored on the blockchain. **Avoid submitting sensitive personal information.**
- **Service Stability**: The service, including access to **Llama-3.2-90B-Vision-Instruct** , may be discontinued at any time. Check the repository for status updates.
- **Resource Limitations**: While using **Llama-3.2-90B-Vision-Instruct** , performance may degrade during high-traffic periods due to shared infrastructure.

## 🏟️ Want to test **Llama-3.2-90B-Vision-Instruct** 's performance in real-world scenarios?

- Visit [**AI Network LLM Arena**](https://arena.ainetwork.ai/leaderboard?utm_source=github&utm_medium=referral&utm_campaign=free-ainize), where you can see **Llama-3.2-90B-Vision-Instruct**’s ranks based on human feedback. You can compare results, view rankings, and explore its performance in real-world scenarios. Check it out and see how **llama 3.2** measures up.

## 🧑‍💻 About us

- [AI Network](https://www.ainetwork.ai?utm_source=github&utm_medium=referral&utm_campaign=free-ainize) solve the problem of GPU shortages among AI developers with blockchain technology. Our platform, Ainize connects users with AI models like **llama 3.2**, making AI accessible and rewarding for contributors. Join us in building a more efficient, decentralized AI ecosystem.

## 💬 Join our community

Have questions or want to discuss **Llama-3.2-90B-Vision-Instruct**? Join our to engage **[X](https://x.com/ainetwork_ai), [Telegram](https://t.me/ainetwork_en), [Discord](https://discord.gg/cupxrsXs)** with other AI enthusiasts and developers! 💡👥

<p align="center">
Powered by <a href="https://github.com/ainize-team/ainize-js">Ainize</a> | Built by the Ainize Team
</p>
