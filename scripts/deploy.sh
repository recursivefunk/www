
# Upload to S3. This could very well just be an S3 sync thing, but I started
# down a different, serverless-based path and ended up simplifying it
./node_modules/.bin/serverless deploy -v --staging production
# Invalidation the cloudfront distro
aws cloudfront create-invalidation --distribution-id ${WEB_CF_ID} --paths "/*"
