### 準備

プロジェクトルートで

```
pnpm install
```

### 後述の DB の migration が終わっている場合

```
// 必要なnodeのサーバーが全て立ち上がる。
pnpm run dev
docker-compose up db
```

### DB

- 起動

```
docker-compose up -d db
```

- マイグレーション実行(Prisma)

```
pnpm server:db:migrate
```

- seed 実行

```
pnpm server:db:seed
```

### Admin / User / Server

- サーバー起動

```
pnpm dev
```

- Admin
  http://localhost:3005/
- User
  http://localhost:3006/
- Server
  http://localhost:8040/
