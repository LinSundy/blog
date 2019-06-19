/**
 * Created by chelin on 2019-05-02
 */
module.exports = {
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('less').oneOfs.store;
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Or array of paths
                    resources: [
                        './src/assets/less/common/base.less',
                        './src/assets/less/common/variables.less',
                    ]
                })
                .end();
        });
    }
};
