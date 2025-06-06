import reflex as rx
import os

config = rx.Config(
    app_name="cividata_company_landing_page",
    plugins=[rx.plugins.TailwindV3Plugin()],
    backend_host="0.0.0.0",
    backend_port=3000,
    frontend_port=3000,
)