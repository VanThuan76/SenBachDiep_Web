module.exports = {
    apps: [{
        script: 'npm start'
    }],
    deploy: {
        production: {
            key: 'key.pem',
            user: 'sbd_dev',
            host: '171.244.60.85',
            ref: 'origin/main',
            repo: 'https://github.com/VanThuan76/SenBachDiep_Web',
            path: '/var/www/senbachdiep_new.com',
            'pre-deploy-local': '',
            'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
            'ssh_options': 'ForwardAgent=yes'
        }
    }
}