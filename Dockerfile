FROM wordpress:php5.6
#RUN apt-get update && apt-get install -y php-pear php5-dev libv8-dev g++ cpp && pecl install v8js-0.1.3
RUN rm -rf /usr/local/etc/php/conf.d/opcache-recommended.ini
EXPOSE 80
