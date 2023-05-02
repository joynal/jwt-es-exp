# JWT ES256 experiment


## Generating an Elliptic Curve keys

You can use the following commands to generate a P-256 Elliptic Curve key pair:

```bash
openssl ecparam -genkey -name prime256v1 -noout -out ec_private.pem
openssl ec -in ec_private.pem -pubout -out ec_public.pem
```

These commands create the following public/private key pair:

ec_private.pem: The private key that must be securely stored on the device and used to sign the authentication JWT.

ec_public.pem: The public key that must be stored in Cloud IoT Core and used to verify the signature of the authentication JWT.


