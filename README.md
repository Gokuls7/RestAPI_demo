

## Description
This project is intended to demonstrate a RESTAPI communication between frontend(Reactjs) and Backend(Django). The database(db.sqlite3) already contains two books list. The project returns the list of books.

## Getting Started

Start the python server.

```sh
# create a virtual environment
$ python -m venv .venv
$ source .venv/Scripts/activate
$ pip install -r requirements.txt

# Run the python server on port 8000
$ python manage.py runserver 8000
```

Start the ReactJs Web APP.

```sh
$ cd simple-reactjs-app
$ npm i
$ npm start
# starts to run on port 3000
```
Click on the **Fetch Books** button to view the list of books available in the database.

![image](https://github.com/user-attachments/assets/2e91e615-c0c9-4671-8d2b-f8f580088fcc)
