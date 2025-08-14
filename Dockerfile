# Use Node.js 18 LTS - compatible con Vite y @vitejs/plugin-vue
FROM node:18-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema necesarias para compilar (si las hay)
RUN apk add --no-cache git

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Imagen de producción con nginx
FROM nginx:alpine AS production

# Copiar configuración personalizada de nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copiar archivos construidos desde el builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Crear directorio para logs si no existe
RUN mkdir -p /var/log/nginx

# Railway usa una variable de entorno PORT
ENV PORT=80
EXPOSE $PORT

# Comando que permite usar el puerto dinámico de Railway
CMD ["sh", "-c", "sed -i 's/listen 80/listen '\"$PORT\"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]