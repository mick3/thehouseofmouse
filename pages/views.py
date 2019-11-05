from django.shortcuts import render, redirect
from products.models import Product
from django.contrib import messages
from .forms import ContactForm

# Create your views here.
def home_view(request, *args, **kwargs):
    featured_products = Product.objects.order_by('-featured', '?')[:6]
    context = {
        'featured_products': featured_products,
        'category': 'All Products',
        'page': 'home',
    }
    return render(request, "index.html", context)

def faqs_view(request, *args, **kwargs):
    return render(request, "faqs.html", {"page": "faqs"})

def about_view(request, *args, **kwargs):
    return render(request, "about.html", {"page": "about"})

def contact_view(request, *args, **kwargs):

    if request.user:
        initial_data = {
            'name': request.user.first_name,
            'email': request.user.email
        }

        contact_form = ContactForm(initial=initial_data)
    
    else:
        contact_form = ContactForm()

    context = {
        "page": "contact",
        "form": contact_form
    }

    return render(request, "contact.html", context)