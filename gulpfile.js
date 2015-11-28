var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
 mix
     /*CSS Global Compulsory*/
     .copy('resources/assets/unify-one-page/assets/plugins/bootstrap/css/bootstrap.min.css','resources/assets/css/css-global-compulsory')
     .copy('resources/assets/unify-one-page/assets/css/one.style.css','resources/assets/css/css-global-compulsory')

     /*CSS Footer*/
     .copy('resources/assets/unify-one-page/assets/css/footers/footer-v7.css','resources/assets/css/footer')

     /*CSS Implements Plugins*/
     .copy('resources/assets/unify-one-page/assets/plugins/animate.css','resources/assets/css/css-implements-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/line-icons/line-icons.css','resources/assets/css/css-implements-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/font-awesome/css/font-awesome.min.css','resources/assets/css/css-implements-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/pace/pace-flash.css','resources/assets/css/css-implements-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/owl-carousel/owl.carousel.css','resources/assets/css/css-implements-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/cube-portfolio/cubeportfolio/css/cubeportfolio.min.css','resources/assets/css/css-implements-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/cube-portfolio/cubeportfolio/custom/custom-cubeportfolio.css','resources/assets/css/css-implements-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/revolution-slider/rs-plugin/css/settings.css','resources/assets/css/css-implements-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/revolution-slider/rs-plugin/css/settings-ie8.css','resources/assets/css/css-implements-plugins')

     /*Style Switcher*/
     .copy('resources/assets/unify-one-page/assets/css/plugins/style-switcher.css','resources/assets/css/style-switcher')

     /*CSS Theme*/
     .copy('resources/assets/unify-one-page/assets/css/theme-colors/default.css','resources/assets/css/css-theme-color')



     .styles([
        './resources/assets/css/css-global-compulsory/bootstrap.min.css',
        './resources/assets/css/css-global-compulsory/one.style.css'
    ],  'public/css/css-global-compulsory.css')

     .styles([
         './resources/assets/css/footer/footer-v7.css'
     ],  'public/css/footer.css')

     /*CSS Implements Plugins*/
     .styles([
         './resources/assets/css/css-implements-plugins/animate.css',
         './resources/assets/css/css-implements-plugins/line-icons.css',
         './resources/assets/css/css-implements-plugins/font-awesome.min.css',
         './resources/assets/css/css-implements-plugins/pace-flash.css',
         './resources/assets/css/css-implements-plugins/owl.carousel.css',
         './resources/assets/css/css-implements-plugins/cubeportfolio.min.css',
         './resources/assets/css/css-implements-plugins/custom-cubeportfolio.css',
         './resources/assets/css/css-implements-plugins/settings.css',
         './resources/assets/css/css-implements-plugins/settings-ie8.css'

     ],  'public/css/css-implements-plugins.css')

     /*CSS Implements Plugins for ie8*/
     .styles([
         './resources/assets/css/css-implements-plugins/settings-ie8.css'

     ],  'public/css/css-implements-plugins-ie8.css')

     /*Style Switcher*/
     .styles([
         './resources/assets/css/style-switcher/style-switcher.css'

     ],  'public/css/style-switcher.css')


     /*CSS Theme*/
     .styles([
         './resources/assets/css/css-theme-color/default.css'

     ],  'public/css/css-theme-color.css')

     /*CSS Customization*/
     .styles([
         './resources/assets/css/css-customization.css'

     ],  'public/css/css-customization.css')


     /*JS Global Compulsory*/
     .copy('resources/assets/unify-one-page/assets/plugins/jquery/jquery.min.js','resources/assets/js/js-global-compulsory')
     .copy('resources/assets/unify-one-page/assets/plugins/jquery/jquery-migrate.js','resources/assets/js/js-global-compulsory')
     .copy('resources/assets/unify-one-page/assets/plugins/bootstrap/js/bootstrap.min.js','resources/assets/js/js-global-compulsory')

     .scripts([
         './resources/assets/js/js-global-compulsory/jquery.min.js',
         './resources/assets/js/js-global-compulsory/jquery-migrate.js',
         './resources/assets/js/js-global-compulsory/bootstrap.min.js'
     ], 'public/js/js-global-compulsory.js')


     /*JS Implementing Plugins*/
     .copy('resources/assets/unify-one-page/assets/plugins/smoothScroll.js','resources/assets/js/js-implementing-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/jquery.easing.min.js','resources/assets/js/js-implementing-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/pace/pace.min.js','resources/assets/js/js-implementing-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/jquery.parallax.js','resources/assets/js/js-implementing-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/counter/waypoints.min.js','resources/assets/js/js-implementing-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/counter/jquery.counterup.min.js','resources/assets/js/js-implementing-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/owl-carousel/owl.carousel.js','resources/assets/js/js-implementing-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/sky-forms-pro/skyforms/js/jquery.form.min.js','resources/assets/js/js-implementing-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/sky-forms-pro/skyforms/js/jquery.validate.min.js','resources/assets/js/js-implementing-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/revolution-slider/rs-plugin/js/jquery.themepunch.tools.min.js','resources/assets/js/js-implementing-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/revolution-slider/rs-plugin/js/jquery.themepunch.revolution.min.js','resources/assets/js/js-implementing-plugins')
     .copy('resources/assets/unify-one-page/assets/plugins/cube-portfolio/cubeportfolio/js/jquery.cubeportfolio.min.js','resources/assets/js/js-implementing-plugins')

     .scripts([
         './resources/assets/js/js-implementing-plugins/smoothScroll.js',
         './resources/assets/js/js-implementing-plugins/jquery.easing.min.js',
         './resources/assets/js/js-implementing-plugins/pace.min.js',

         './resources/assets/js/js-implementing-plugins/jquery.parallax.js',
         './resources/assets/js/js-implementing-plugins/waypoints.min.js',
         './resources/assets/js/js-implementing-plugins/jquery.counterup.min.js',
         './resources/assets/js/js-implementing-plugins/owl.carousel.js',
         './resources/assets/js/js-implementing-plugins/jquery.form.min.js',
         './resources/assets/js/js-implementing-plugins/jquery.validate.min.js',
         './resources/assets/js/js-implementing-plugins/jquery.themepunch.tools.min.js',

         './resources/assets/js/js-implementing-plugins/jquery.themepunch.revolution.min.js',
         './resources/assets/js/js-implementing-plugins/jquery.cubeportfolio.min.js'

     ], 'public/js/js-implementing-plugins.js')

     /*JS Page Level*/
     .copy('resources/assets/unify-one-page/assets/js/one.app.js','resources/assets/js/js-page-level')
     .copy('resources/assets/unify-one-page/assets/js/forms/login.js','resources/assets/js/js-page-level')
     .copy('resources/assets/unify-one-page/assets/js/forms/contact.js','resources/assets/js/js-page-level')

     .copy('resources/assets/unify-one-page/assets/js/plugins/pace-loader.js','resources/assets/js/js-page-level')
     .copy('resources/assets/unify-one-page/assets/js/plugins/owl-carousel.js','resources/assets/js/js-page-level')
     .copy('resources/assets/unify-one-page/assets/js/plugins/revolution-slider.js','resources/assets/js/js-page-level')
     .copy('resources/assets/unify-one-page/assets/js/plugins/cube-portfolio/cube-portfolio-lightbox.js','resources/assets/js/js-page-level')

     .scripts([
         './resources/assets/js/js-page-level/one.app.js',
         './resources/assets/js/js-page-level/login.js',
         './resources/assets/js/js-page-level/contact.js',
         './resources/assets/js/js-page-level/pace-loader.js',
         './resources/assets/js/js-page-level/owl-carousel.js',
         './resources/assets/js/js-page-level/revolution-slider.js',
         './resources/assets/js/js-page-level/cube-portfolio-lightbox.js'

     ], 'public/js/js-page-level.js')

     /*IE 9 Scripts*/
     .copy('resources/assets/unify-one-page/assets/plugins/respond.js','resources/assets/js/IE9-scripts')
     .copy('resources/assets/unify-one-page/assets/plugins/html5shiv.js','resources/assets/js/IE9-scripts')
     .copy('resources/assets/unify-one-page/assets/plugins/sky-forms-pro/skyforms/js/sky-forms-ie8.js','resources/assets/js/IE9-scripts')

     .scripts([
         './resources/assets/js/IE9-scripts/respond.js',
         './resources/assets/js/IE9-scripts/html5shiv.js',
         './resources/assets/js/IE9-scripts/sky-forms-ie8.js'

     ], 'public/js/js-IE9-support.js')

     /*IE 10 Scripts*/
     .copy('resources/assets/unify-one-page/assets/plugins/sky-forms-pro/skyforms/js/jquery.placeholder.min.js','resources/assets/js/IE10-scripts')
     .scripts([
         './resources/assets/js/IE10-scripts/jquery.placeholder.min.js'
     ], 'public/js/js-IE10-support.js')

     /*JS Customization*/
     .scripts([
         './resources/assets/js/js-customization.js'
     ], 'public/js/js-customization.js')

     .version([
                'css/css-global-compulsory.css',
                'css/footer.css',
                'css/css-implements-plugins.css',
                'css/css-implements-plugins-ie8.css',
                'css/style-switcher.css',
                'css/css-theme-color.css',
                'css/css-customization.css',

                'js/js-global-compulsory.js',
                'js/js-implementing-plugins.js',
                'js/js-page-level.js',
                'js/js-IE9-support.js',
                'js/js-IE10-support.js',
                'js/js-customization.js'
     ])

     ;//mix ending line

}); //elixir closing
