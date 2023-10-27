import stripe

stripe.api_key = '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'

email = "edvmolla@gmail.com"  # Replace with the email you want to filter by

a = stripe.Customer.search(query="email:'edvmolla@gmail.com'")
print(a)