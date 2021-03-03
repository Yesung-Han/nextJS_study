module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'aws-s3-cdn',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET'),
      },
      cdn: env('CLOUDFRONT_URL')
    },
  },
  // ...
});