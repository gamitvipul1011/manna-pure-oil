# 🫙 Manna Pure Oil — Static Frontend

100% Frontend-only React app — **No backend needed**.
All product data is hardcoded. WhatsApp order working.

## 🚀 Deploy on Render (Free)

1. GitHub par push karo
2. [render.com](https://render.com) → New → Static Site
3. Connect GitHub repo
4. Build Command: `npm install && npm run build`
5. Publish Directory: `dist`
6. Deploy!

## 🖥️ Local Run

```bash
npm install
npm run dev
```

## 📦 Update Products

Edit: `src/data/products.js`
- Products, prices, images, sizes — sab same file ma

## 📱 WhatsApp Order

Every product page ma green "Order on WhatsApp" button che.
Auto-message: product name + size + price + quantity.

WhatsApp: +91 78742 39595

## 🌐 GitHub Pages Deploy

```bash
npm run build
# dist/ folder GitHub Pages par deploy karo
```

`public/_redirects` file already added for SPA routing.
