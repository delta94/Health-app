/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
};

if (process.env.NEXT_PUBLIC_ENABLE_MOCK_SERVICE === 'true') {
  // https://github.com/mswjs/msw/issues/690#issuecomment-849552403
  nextConfig.headers = async () => {
    return [
      {
        // Append the "Service-Worker-Allowed" header
        // to each response, overriding the default worker's scope.
        source: '/(.*)',
        headers: [
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
    ];
  };
}

module.exports = nextConfig;
