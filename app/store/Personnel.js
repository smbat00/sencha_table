Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    proxy: {
        type: 'ajax',  // Change the proxy type to 'ajax' for loading data from a URL
        url: './data/data.json',  // URL to your JSON file
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
