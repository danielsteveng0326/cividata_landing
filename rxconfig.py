# rxconfig.py
import reflex as rx
import os

config = rx.Config(
    app_name="cividata_company_landing_page",
    plugins=[rx.plugins.TailwindV3Plugin()],
    backend_host="0.0.0.0",
    # Usar el puerto que Railway asigna (3000 en tu caso)
    backend_port=int(os.environ.get("PORT", 3000)),
    frontend_port=int(os.environ.get("PORT", 3000)),  # Mismo puerto para ambos
)