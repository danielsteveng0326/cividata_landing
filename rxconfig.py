import reflex as rx

config = rx.Config(
    app_name="cividata_company_landing_page",
    plugins=[rx.plugins.TailwindV3Plugin()],
    # Para producción
    backend_host="0.0.0.0",
    frontend_port=3000,
    backend_port=8000,
)