# financial-app

So to run this program locally I would first recommend testing the backend code first.
What I did was I had my EC2 instance open in one aws cloud terminal then I had an aws cloud shell terminal open in another tab.

In my EC2 tab I ran the command:
python3 run.py

After that in the other tab I would run this curl command to test the api endpoint:
curl http://50.19.182.206:5000/api/data

After that I deployed the backend code to see if it would display on the webpage. I ran the backend code using the command:
PYTHONPATH=$(pwd) gunicorn --bind 0.0.0.0:5000 app:app

After seeing that the api endpoint was working I moved on to testing the frontend code. I did so by being in the directory called frontend and using the command:
npm run dev -- --host

These are the commands I used to test my code and test it locally and to deploy it. The code is currently deployed and can be reached using this URL:
http://50.19.182.206:5173/
