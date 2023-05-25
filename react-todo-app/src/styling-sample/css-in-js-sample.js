// VSCodeの拡張機能 ID: 「styled-components.vscode-styled-components」
import styled from "styled-components";

// 生成する要素を指定し、スタイルをテンプレートリテラル(タグ付きテンプレート)で記述。
// 「styled.button」部分は、関数として認識され、「``」内は、引数として認識される。
//   タグ付きテンプレートにつき、参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals

// コンポーネント扱いなので変数名は、大文字で記述
const FirstButton = styled.button`
  // この中は、cssファイルで記述する形と同様。
    // あくまで、文字列として認識される。
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: pink;
  border: none;
`;

// styled()でラップすると、スタイルの継承ができる。
  // 以下では、FirstButtonを継承している。
const SecondButton = styled(FirstButton)`
  // 以下で、差分を記載する。
  background: red;
  color: white;
`;

// 以下は、文字列内で、jsのコードを実行するという扱い
// 値の部分を関数にすることで、引数にpropsを受け取ることができる。
  // 「({ dark }) => (dark ? "black" : "green")」という形で分割代入で表現もできる。
const ThirdButton = styled(SecondButton)`
  background: ${(props) => (props.dark ? "black" : "green")};
`;

const Example = () => {
  return (
    <>
      <FirstButton>ボタン1</FirstButton>

      <SecondButton>ボタン2</SecondButton>

      <ThirdButton>ボタン3</ThirdButton>

      {/* 以下でいうpropsのdarkは、「dark={dark}」と同義 */}
      <ThirdButton dark>ボタン3</ThirdButton>
    </>
  );
};

export default Example;