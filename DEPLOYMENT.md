# Guía de Despliegue - CiviData Landing Page

## 🚀 Opciones de Despliegue

### 1. Netlify (Recomendado)

#### Método A: Desde GitHub

1. **Sube tu código a GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/cividata-landing.git
git push -u origin main
```

2. **Conecta con Netlify**
- Ve a [netlify.com](https://netlify.com)
- Click en "Add new site" → "Import an existing project"
- Selecciona GitHub y autoriza
- Elige tu repositorio

3. **Configuración de Build**
```
Build command: npm run build
Publish directory: dist
```

4. **Deploy!**
- Netlify construirá y desplegará automáticamente
- Obtendrás una URL como `https://tu-sitio.netlify.app`

#### Método B: Drag & Drop

1. **Build local**
```bash
npm run build
```

2. **Arrastra la carpeta `dist`** a Netlify

---

### 2. Vercel

1. **Instala Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Sigue las instrucciones** en la terminal

**O desde la web:**
- Conecta tu repositorio de GitHub
- Vercel detectará automáticamente Vite
- Click en "Deploy"

---

### 3. Railway (Ya configurado)

El proyecto ya tiene `railway.toml` y `Dockerfile`.

1. **Crea cuenta en Railway**
2. **Nuevo proyecto** → "Deploy from GitHub"
3. **Selecciona el repo**
4. Railway usará el Dockerfile automáticamente

---

### 4. GitHub Pages

1. **Instala gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Agrega scripts a package.json**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Configura base en vite.config.mjs**
```js
export default defineConfig({
  base: '/nombre-repo/',
  plugins: [vue()]
})
```

4. **Deploy**
```bash
npm run deploy
```

---

### 5. Servidor Propio (VPS)

#### Con Nginx

1. **Build**
```bash
npm run build
```

2. **Sube archivos de `dist/` a tu servidor**
```bash
scp -r dist/* usuario@servidor:/var/www/cividata
```

3. **Configura Nginx**
```nginx
server {
    listen 80;
    server_name tudominio.com;
    root /var/www/cividata;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Caché para assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

4. **Reinicia Nginx**
```bash
sudo systemctl restart nginx
```

---

## 🔧 Configuración Pre-Deploy

### Variables de Entorno

Si necesitas variables de entorno, crea `.env`:

```env
VITE_API_URL=https://tu-api.com
VITE_GA_ID=G-XXXXXXXXXX
```

Úsalas en el código:
```js
const apiUrl = import.meta.env.VITE_API_URL
```

### Optimización de Build

#### 1. Comprimir Assets

Instala plugin de compresión:
```bash
npm install --save-dev vite-plugin-compression
```

Configura en `vite.config.mjs`:
```js
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    vue(),
    compression()
  ]
})
```

#### 2. Analizar Bundle

```bash
npm install --save-dev rollup-plugin-visualizer
```

```js
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    vue(),
    visualizer()
  ]
})
```

Después de build, abre `stats.html` para ver el tamaño de cada módulo.

---

## 🌐 Dominio Personalizado

### En Netlify

1. Ve a "Domain settings"
2. Click en "Add custom domain"
3. Ingresa tu dominio
4. Configura DNS:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: tu-sitio.netlify.app
```

### En Vercel

1. Ve a "Settings" → "Domains"
2. Agrega tu dominio
3. Configura DNS según las instrucciones

---

## 🔒 HTTPS

**Netlify y Vercel** proporcionan HTTPS automático con Let's Encrypt.

**Servidor propio:**

1. Instala Certbot
```bash
sudo apt install certbot python3-certbot-nginx
```

2. Obtén certificado
```bash
sudo certbot --nginx -d tudominio.com -d www.tudominio.com
```

3. Certbot configurará Nginx automáticamente

---

## 📊 Post-Deploy Checklist

- [ ] Verifica que todas las páginas cargan correctamente
- [ ] Prueba en móvil, tablet y desktop
- [ ] Verifica que el formulario funciona
- [ ] Comprueba que los enlaces funcionan
- [ ] Revisa Google Analytics
- [ ] Prueba la velocidad con [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verifica SEO con [Google Search Console](https://search.google.com/search-console)
- [ ] Configura dominio personalizado
- [ ] Habilita HTTPS
- [ ] Configura redirects (www → no-www o viceversa)

---

## 🔄 CI/CD Automático

### GitHub Actions

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod --dir=dist
```

---

## 🐛 Troubleshooting

### Error: "Page not found" en rutas

**Solución:** Configura redirects.

**Netlify:** Crea `public/_redirects`:
```
/*    /index.html   200
```

**Vercel:** Crea `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Assets no cargan

**Problema:** Rutas absolutas vs relativas

**Solución:** Usa rutas relativas o configura `base` en Vite:
```js
export default defineConfig({
  base: './'
})
```

### Build falla

1. **Limpia cache:**
```bash
rm -rf node_modules dist
npm install
npm run build
```

2. **Verifica versión de Node:**
```bash
node --version  # Debe ser >= 18
```

---

## 📈 Monitoreo Post-Deploy

### Google Analytics

Ya está configurado. Verifica en:
- [Google Analytics Dashboard](https://analytics.google.com/)

### Performance

Monitorea con:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Uptime

Usa servicios como:
- [UptimeRobot](https://uptimerobot.com/) (gratis)
- [Pingdom](https://www.pingdom.com/)

---

## 🎯 Optimizaciones Recomendadas

### 1. Lazy Loading de Imágenes

```vue
<img loading="lazy" src="..." alt="..." />
```

### 2. Preload de Fuentes

En `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### 3. Minificar CSS/JS

Vite lo hace automáticamente en producción.

### 4. CDN

Usa Cloudflare para:
- Caché global
- DDoS protection
- SSL gratis

---

## 📞 Soporte

Si tienes problemas:

1. **Revisa logs** en tu plataforma de deploy
2. **Consulta documentación:**
   - [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
   - [Netlify Docs](https://docs.netlify.com/)
   - [Vercel Docs](https://vercel.com/docs)
3. **Busca en GitHub Issues** del proyecto

---

¡Listo para desplegar! 🚀
