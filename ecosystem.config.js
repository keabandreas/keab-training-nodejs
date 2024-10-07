module.exports = {
  apps: [{
    name: 'karlshamn-energi-training',
    cwd: './frontend',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 2000
    },
  }],
};
