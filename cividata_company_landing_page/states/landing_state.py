import reflex as rx
from typing import TypedDict, List
import re
import datetime


class ModuleHighlight(TypedDict):
    icon: str
    title: str
    description: str


class TestimonialEntry(TypedDict):
    name: str
    role: str
    organization: str
    quote: str
    avatar_seed: str


class PricingTier(TypedDict):
    name: str
    price: str
    description: str
    features: List[str]
    is_popular: bool
    cta_text: str


def is_valid_email(email: str) -> bool:
    pattern = (
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
    )
    return bool(re.match(pattern, email))


class LandingState(rx.State):
    email_input: str = ""
    show_toast: bool = False
    toast_message: str = ""
    toast_status: str = "success"
    selected_module_for_toast: str = ""
    module_highlights_data: list[ModuleHighlight] = [
        {
            "icon": "file-signature",
            "title": "Contract Monitoring",
            "description": "AI-powered oversight of public contracts for transparency and compliance.",
        },
        {
            "icon": "clipboard-check",
            "title": "Development Plan Analysis",
            "description": "Optimize urban planning with data-driven insights into development proposals.",
        },
        {
            "icon": "map",
            "title": "Interactive Geoportals",
            "description": "Visualize civic data on dynamic maps for enhanced community engagement.",
        },
        {
            "icon": "bar-chart-big",
            "title": "Data-Driven Decisions",
            "description": "Empower your administration with actionable intelligence from diverse data sources.",
        },
    ]
    testimonials_data: list[TestimonialEntry] = [
        {
            "name": "Mayor Jane Smith",
            "role": "City of Progressville",
            "organization": "Progressville City Hall",
            "quote": "CiviData transformed how we approach urban development, making our processes more efficient and transparent.",
            "avatar_seed": "jane_smith",
        },
        {
            "name": "Dr. Alistair Finch",
            "role": "Head of Urban Planning, New Harmony County",
            "organization": "New Harmony County",
            "quote": "The geoportals are an invaluable tool for community engagement and data visualization.",
            "avatar_seed": "alistair_finch",
        },
        {
            "name": "Maria Gonzalez",
            "role": "Chief Procurement Officer, Civic Solutions Hub",
            "organization": "Civic Solutions Hub",
            "quote": "Contract monitoring with CiviData has significantly improved our compliance and saved public funds.",
            "avatar_seed": "maria_gonzalez",
        },
    ]
    pricing_tiers_data: list[PricingTier] = [
        {
            "name": "Community",
            "price": "$99",
            "description": "For small municipalities and local agencies.",
            "features": [
                "1 Core Module Access",
                "Basic Data Analytics",
                "Community Support",
                "50GB Data Storage",
            ],
            "is_popular": False,
            "cta_text": "Get Started",
        },
        {
            "name": "District",
            "price": "$499",
            "description": "For growing cities and regional authorities.",
            "features": [
                "3 Core Modules Access",
                "Advanced Data Analytics",
                "Priority Email Support",
                "250GB Data Storage",
                "User Roles & Permissions",
            ],
            "is_popular": True,
            "cta_text": "Choose Plan",
        },
        {
            "name": "Metropolis",
            "price": "Custom",
            "description": "Tailored solutions for large urban centers and governments.",
            "features": [
                "All Modules & Custom Solutions",
                "Predictive Analytics Suite",
                "Dedicated Account Manager",
                "Unlimited Data Storage",
                "Custom Integrations & APIs",
            ],
            "is_popular": False,
            "cta_text": "Contact Sales",
        },
    ]

    @rx.event
    def handle_demo_request(self, form_data: dict):
        email = form_data.get("email", "")
        if not email or not is_valid_email(email):
            self.toast_message = (
                "Please enter a valid email address."
            )
            self.toast_status = "error"
            self.show_toast = True
            return
        print(
            f"CiviData Demo request received for: {email}"
        )
        self.toast_message = f"Thank you! We'll contact {email} shortly with demo details for CiviData."
        self.toast_status = "success"
        self.show_toast = True
        self.email_input = ""

    @rx.event
    def handle_pricing_cta_click(self, tier_name: str):
        self.toast_message = f"Interested in the {tier_name} plan for CiviData? Please request a demo or contact sales to proceed."
        self.toast_status = "success"
        self.show_toast = True
        yield rx.call_script(
            "document.getElementById('cta').scrollIntoView({ behavior: 'smooth' });"
        )

    @rx.event
    def hide_toast(self):
        self.show_toast = False

    @rx.event
    def set_email_input(self, value: str):
        self.email_input = value

    @rx.var
    def current_year(self) -> int:
        return datetime.date.today().year