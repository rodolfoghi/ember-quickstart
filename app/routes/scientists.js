import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [ 'Rodolfo Ghiggi', 'Guilherme Silvestri Ghiggi', 'Simone Silvestri', 'Gabrieli Concari Minozzo', 'Matheus Metz', 'Gabriele Bordignon', 'Nicole Bettega' ];
    }
});
