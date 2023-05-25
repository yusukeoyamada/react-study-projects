// import React from 'react';
  // 上記は、React(v17)から不要になった。
    // 参考: https://zenn.dev/kaikii/articles/7f14be0586128d
// import ReactDOM from 'react-dom/client';

// React(v17)から追加された新機能で、コンポーネントのバグを検知したり、予期せぬ処理などを警告してくれるツール
  // 参考: https://blog-mayo.com/2022/10/1073/
import { StrictMode } from "react";
// React(v17)から追加された新機能で、並行処理の機能群にアクセス可能になる
  // 参考: https://qiita.com/Yuki_Oshima/items/b6ec2fb9f5b5d53381ad
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 以下、「ReactDOM.createRoot」でも可能。
const root = createRoot(document.getElementById('root'));
root.render(
  // 以下、「React.StrictMode」でも可能
  <StrictMode>
    <App />
  </StrictMode>
);

// アプリのパフォーマンス測定を開始したい場合は、
// 結果を記録する関数を渡すか(例: reportWebVitals(console.log))、
// 分析エンドポイントに送信します。
// 詳細はこちら: https://bit.ly/CRA-vitals
reportWebVitals();

// React(v18)以前は、以下
// import { render } from 'react-dom';
// render(
//   <App />,
//   document.getElementById('app')
// );