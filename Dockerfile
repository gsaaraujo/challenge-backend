FROM php:8.0-fpm

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install
RUN alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'
RUN sail up