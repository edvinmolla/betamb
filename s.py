import stripe

stripe.api_key = 'key here'

email = "edvmolla@gmail.com"  # Replace with the email you want to filter by

a = stripe.Customer.search(query="email:'edvmolla@gmail.com'")
print(a)
