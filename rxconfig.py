import reflex as rx
import os

config = rx.Config(
    app_name="cividata_company_landing_page",
    plugins=[rx.plugins.TailwindV3Plugin()],
    # Para producción
    backend_host="0.0.0.0",
    frontend_port=3000,
    backend_port=int(os.environ.get("PORT", 8000)),
    # Configuración adicional para Railway
    api_url=os.environ.get("RAILWAY_PUBLIC_DOMAIN", "localhost:8000"),
)