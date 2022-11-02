# Ung Minh Hoài

# Chatbot Deployment with Flask and JavaScript

## Initial Setup:
This repo currently contains the starter files.

Clone repo and create a virtual environment
```
$ git clone https://github.com/ITHealer/Chatbot_Rasa.git
$ cd Chatbot_Rasa
$ python -m venv venv
$ . venv/bin/activate
```
Install dependencies
```
$ (venv) pip install Flask torch torchvision nltk
```
Install nltk package
```
$ (venv) python
>>> import nltk
>>> nltk.download('punkt')
```
## Modify `intents.json` with different intents and responses for your Chatbot

![image](https://user-images.githubusercontent.com/94621494/199390763-91fff19c-26ed-47a6-994f-414db4c7385e.png)


Run
```
$ (venv) python train.py
```
This will dump data.pth file. And then run
the following command to test it in the console.
```
$ (venv) python chat.py
```

Now for deployment follow my tutorial to implement `app.py` and `app.js`.

## Image
[![image](https://user-images.githubusercontent.com/94621494/199389983-5ed37114-f6cf-4302-8af2-1c7af5bfe7f8.png)
]

## Credits:
This repo was used for the frontend code:
https://github.com/hitchcliff/front-end-chatjs

https://github.com/python-engineer/pytorch-chatbot
