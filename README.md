# vue3-ts-starter

## 環境構築

1. vscode のインストール

- https://code.visualstudio.com/download からダウンロード
- この段階では、特に vscode についてはセッティング不要（後で行う）

2. node のインストール

- https://nodejs.org/ja/ から LTS を取得
- この記事あたりが参考になるので参照にしながらセットアップ
  - https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b
- powershell 起動して、`node --version`　と入力してバージョンが表示されていれば完了

3. git のインストール

- https://gitforwindows.org/ からダウンロード
- https://sukkiri.jp/technologies/devtools/git/git_win.html を参考にしながらセットアップ
- `git --version`と入力してバージョンが表示されれば成功

4. 適当なディレクトリで`git clone https://github.com/cw-takumiohnuki/vue-tsx-starter.git`を入力し、ローカルリポジトリの作成を行う
5. vscode を開き、左上のファイル>フォルダーを開くから clone してきたディレクトリを開く

- まだ vscode が英語だと思うので、File>Open Folder とかになってるかも？

6. 右下におすすめの拡張機能をインストールしますか？というポップアップが出るので、全部インストール

## 実行

1. vscode で`ctl+shift+@`を入力して、ターミナルを開く
2. ターミナルにて、`npm i`を入力して、少し待つ。
3. `npm run dev`を入力して、`Local: http://XXX.X.X.X.:XXXX`と表示されている部分の URL にアクセスする。
4. Test1 Test2 みたいな画面が表示されていれば成功

## 追加設定

1. ターミナルにて下記 2 コマンドを実行

- `npx husky init`
- `npx husky install`

2. mac の場合，下記コマンドも実行

- `chmod +x .husky/pre-commit`

## 自分のリポジトリを作成

1. GitHub にて右上の自分のアイコン> Your Repositories をクリック
2. New アイコンをクリック
3. Repository name を適当につけて create 　 repository をクリック（ここでは例として Test とする）
   （作りたいアプリケーションっぽいネーミングがいいかな！）
4. リポジトリから下記 3 つが乗っているコマンドを確認（XXX は自分のアカウント名、Test.git が先ほど付けた ripository name になっているはず）

```
git remote add origin https://github.com/XXXX/Test.git
git branch -M main
git push -u origin main
```

4. ターミナルで先ほどのディレクトリにて確認した 3 コマンドを順番に入力
5. リポジトリの Settings>Collaborators から Add Peoples をクリック
6. 下記 2 アカウントを追加

- takumi-13
- cw-takumiohnuki
