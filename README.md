<h1 align="center">
  💸 FreeAinize.js
</h1>

<p align="center">
    <p align="center">Call LLM APIs with Ainize Free. </p>
</p>

이건 블록체인을 통하는 것이다. supportedLLM은 변경될 수 있다. 
시작할 때마다 블록체인 account를 생성하고 있는데, 고정된 address를 쓰고 싶으면 Ainize 생성할 때 주입해주면 된다. 
해당 모델은 LLM FUNDING(링크)을 통해서 지원받은 GPU로 제공된다.
너의 Inference기록은 블록체인에 남으므로, 민감한 정보는 적지 마라.

# Usage

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
- llama-3.11 8B -> model config같은 세팅 정보

# Contributing

# Enterprise
