# Commands Note

## Create a virtualenv
$ virtualenv -p [PYTHON EXECUTABLE] [VIRTUALENV DIR]
i.e. virtualenv -p python3 venv

## Activate virtualenv
$ source [VIRTUALENV DIR]/bin/activate
i.e. source venv/bin/activate

## Deactivate virtualenv
$ deactivate

## Install all depencies written in a text file.
$ pip install -Ur [TEXTFILE]
i.e. pip install -Ur requirements.txt

## Start a project
$ django-admin startproject [NAME] [DIR]
i.e. django-admin startproject config .
