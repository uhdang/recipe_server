from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('DJANGO_SECRET_KEY', default='+ah%*+zqjqk^hcd#=zz&$jauua(f41#%rt(hz*)vk#y2r!)%8(')

DEBUG = env.bool('DJANGO_DEBUG', default=True)
