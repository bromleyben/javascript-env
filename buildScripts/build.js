import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

webpack(webpackConfig).run((err, stats) => {
   if (err) {
       console.log(chalk.red(err));
       return 1;
   }

   const jsonStats = stats.toJson();

   if (jsonStats.hasErrors) {
   //    TODO finish
   }

   return 0;
});