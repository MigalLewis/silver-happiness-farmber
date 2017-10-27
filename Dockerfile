FROM node:8
MAINTAINER Migal Lewis <Migal.Lewis@standardbank.co.za>

ENV FARMBER_USR farmber
ENV FARMBER_GROUP farmber_group
ENV FARMBER_HOME /home/farmber

RUN groupadd -r $FARMBER_GROUP && useradd -r -g $FARMBER_GROUP $FARMBER_USR && \
    mkdir -p $FARMBER_HOME && \
    chown -R $FARMBER_USR $FARMBER_HOME
WORKDIR $FARMBER_HOME

RUN apt-get -y install git

USER farmber

RUN git clone https://github.com/MigalLewis/silver-happiness-farmber.git

USER node
RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install -g @angular/cli

USER farmber
RUN cd silver-happiness-farmber && npm install

EXPOSE 4200

WORKDIR $FARMBER_HOME/silver-happiness-farmber
USER $FARMBER_USR

CMD [ "npm", "start"]
