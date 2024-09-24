module.exports = {
  apps: [
    {
      name: 'my-nest-app',
      script: './dist/main.js',
      instances: 'max', // 启动最大实例数
      exec_mode: 'cluster', // 使用集群模式
      watch: false, // 是否监视文件变化
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
