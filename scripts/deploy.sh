
./node_modules/.bin/serverless deploy -v --staging production
aws cloudfront create-invalidation --distribution-id ${WEB_CF_ID} --invalidation-batch "/*"
