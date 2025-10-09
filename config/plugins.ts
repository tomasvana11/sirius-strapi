export default () => ({
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          baseUrl: process.env.DO_SPACE_CDN_URL,
          rootPath: process.env.DO_SPACE_DIRECTORY,
          s3Options: {
            credentials: {
              accessKeyId: process.env.DO_SPACE_ACCESS_KEY,
              secretAccessKey: process.env.DO_SPACE_SECRET_KEY,
            },
            endpoint: process.env.DO_SPACE_ENDPOINT,
            region: process.env.DO_SPACE_REGION,
            params: {
              Bucket: process.env.DO_SPACE_BUCKET,
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  });

