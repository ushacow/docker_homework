FROM python:3
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
EXPOSE 8000
ENTRYPOINT ["/code/docker-entrypoint.sh"]
