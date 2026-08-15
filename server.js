const express = require('express');
const app = express();

app.get('/health', (_req, res) => res.json({ ok: true }));
app.get('/api/users', (_req, res) => res.json({ users: [] }));

app.listen(3000, () => console.log('fixture on :3000'));
