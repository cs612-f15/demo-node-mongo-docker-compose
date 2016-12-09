FROM ubuntu:14.04

RUN apt-get update -yq && apt-get upgrade -yq && \
    apt-get install -yq curl git ssh sshpass
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

RUN apt-get -q -y install nodejs build-essential
RUN npm install -g bower

# copy app and install deps
COPY . /src
RUN cd /src && npm install
EXPOSE 9000
CMD [ "node", "/src/server.js" ]
