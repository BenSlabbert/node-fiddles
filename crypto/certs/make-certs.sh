#!/usr/bin/env bash

openssl req -x509 -newkey rsa:2048 -keyout private.pem -out cert.pem -days 365 -nodes
openssl rsa -in private.pem -out public.pem -outform PEM -pubout
