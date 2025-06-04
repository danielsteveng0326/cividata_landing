import reflex as rx
import os

config = rx.Config(
    app_name="cividata_company_landing_page",
    plugins=[rx.plugins.TailwindV3Plugin()],
    # Para producción
    backend_host="0.0.0.0",
    frontend_port=3000,
    backend_port=int(os.environ["PORT"]) if "PORT" in os.environ and os.environ["PORT"].isdigit() else 8000,
    # Configuración adicional para Railway
    api_url=f"http://0.0.0.0:{os.environ.get('PORT', 8000)}",
)