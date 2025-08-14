# Use Node.js 18 LTS - compatible con Vite y @vitejs/plugin-vue
FROM node:18-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema necesarias para compilar (si las hay)
RUN apk add --no-cache git

# Copiar archivos de dependencias
COPY package*.json ./

# Limpiar cache npm y instalar dependencias
RUN npm ci --only=production=false

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Imagen de producción con nginx
FROM nginx:alpine AS production

# Copiar archivos construidos desde el builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración custom de nginx si la tienes
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponer puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]