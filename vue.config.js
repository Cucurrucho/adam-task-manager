module.exports = {
    devServer: {
        public: 'localhost:8080',
        proxy: {
            "/api/*": {
                target: "http://task-manager.local",
                secure: false
            }
        }
    }
};

