from django import forms

class UserRegistrationForm(forms.Form):
    username = forms.CharField(max_length=100)
    password = forms.CharField(widget=forms.PasswordInput)
    email = forms.EmailField()
    # Adicione outros campos de acordo com suas necessidades

class AddBalanceForm(forms.Form):
    amount = forms.FloatField(label='Valor a adicionar')
