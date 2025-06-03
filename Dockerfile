# Usa una imagen base de Python
FROM python:3.11-slim

# Instala las dependencias del sistema necesarias incluyendo Node.js
RUN apt-get update && apt-get install -y \
    unzip \
    curl \
    git \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de requirements
COPY requirements.txt .

# Instala las dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código
COPY . .

# Inicializa el proyecto Reflex (esto instalará Bun y compilará el frontend)
RUN reflex init

# Exporta el frontend para producción
RUN reflex export --frontend-only --no-zip

# Expone el puerto
EXPOSE 8000

# Comando para ejecutar la aplicación en modo producción
CMD ["reflex", "run", "--env", "prod", "--backend-only"]