# vue3-ts-starter

## 環境構築
1. vscodeのインストール
- https://code.visualstudio.com/download からダウンロード
- この段階では、特にvscodeについてはセッティング不要（後で行う）
2. nodeのインストール
- https://nodejs.org/ja/ からLTSを取得
- この記事あたりが参考になるので参照にしながらセットアップ
  - https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b
- powershell起動して、`node --version`　と入力してバージョンが表示されていれば完了
3. gitのインストール
- https://gitforwindows.org/ からダウンロード
- https://sukkiri.jp/technologies/devtools/git/git_win.html を参考にしながらセットアップ
- `git --version`と入力してバージョンが表示されれば成功
4. 適当なディレクトリで`git clone https://github.com/cw-takumiohnuki/vue-tsx-starter.git`を入力し、ローカルリポジトリの作成を行う
5. vscodeを開き、左上のファイル>フォルダーを開くからcloneしてきたディレクトリを開く
- まだvscodeが英語だと思うので、File>Open Folderとかになってるかも？
6. 右下におすすめの拡張機能をインストールしますか？というポップアップが出るので、全部インストール

## 実行
1. vscodeで`ctl+shift+@`を入力して、ターミナルを開く
2. ターミナルにて、`npm i`を入力して、少し待つ。
3. `npm run dev`を入力して、`Local: http://XXX.X.X.X.:XXXX`と表示されている部分のURLにアクセスする。
4. Test1 Test2みたいな画面が表示されていれば成功

## 追加設定
1. ターミナルにて下記2コマンドを実行
- `npx husky init`
- `npx husky install` 

## 自分のリポジトリを作成
1. GitHubにて右上の自分のアイコン> Your Repositoriesをクリック
2. Newアイコンをクリック
3. Repository name を適当につけてcreate　repositoryをクリック（ここでは例としてTestとする）
（作りたいアプリケーションっぽいネーミングがいいかな！）
4. リポジトリから下記3つが乗っているコマンドを確認（XXXは自分のアカウント名、Test.gitが先ほど付けたripository nameになっているはず）
```
git remote add origin https://github.com/XXXX/Test.git
git branch -M main
git push -u origin main
```
4. ターミナルで先ほどのディレクトリにて確認した3コマンドを順番に入力
5. リポジトリのSettings>CollaboratorsからAdd Peoplesをクリック
6. 下記2アカウントを追加
- takumi-13
- cw-takumiohnuki
