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

### NestJS / Web / Admin

- サーバー起動

```
pnpm dev
```

- NestJS
  http://localhost:8040/
- Web
  http://localhost:3000/
- Admin
  http://localhost:3001/
