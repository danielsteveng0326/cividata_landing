import reflex as rx
from cividata_company_landing_page.states.landing_state import LandingState


def cta_section() -> rx.Component:
    return rx.el.section(
        rx.el.div(
            rx.el.div(
                rx.el.h2(
                    "Ready to Modernize Your Municipality with CiviData?",
                    class_name="text-3xl sm:text-4xl font-bold text-white text-center",
                ),
                rx.el.p(
                    "Request a personalized demo to see how CiviData can empower your local government with data-driven insights.",
                    class_name="mt-4 text-lg text-teal-100 text-center max-w-2xl mx-auto",
                ),
                rx.el.form(
                    rx.el.div(
                        rx.el.input(
                            placeholder="Enter your government or work email",
                            type="email",
                            name="email",
                            class_name="w-full px-5 py-3 rounded-lg border-2 border-transparent focus:border-teal-300 focus:ring-2 focus:ring-teal-300 outline-none transition-colors text-gray-800 placeholder-gray-500",
                            required=True,
                        ),
                        rx.el.button(
                            "Request Demo",
                            type="submit",
                            class_name="w-full sm:w-auto px-8 py-3 bg-white text-teal-700 font-semibold rounded-lg shadow-md hover:bg-teal-50 transition-colors transform hover:scale-105",
                        ),
                        class_name="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-4 items-center",
                    ),
                    on_submit=LandingState.handle_demo_request,
                    reset_on_submit=True,
                ),
                class_name="py-16 sm:py-24",
            ),
            class_name="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        ),
        id="cta",
        class_name="bg-gradient-to-r from-teal-600 to-sky-700",
    )