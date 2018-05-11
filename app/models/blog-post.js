import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('String'),
    publishedAt: DS.attr('String'),
    content: DS.attr('String'),

    author: DS.belongsTo('author')
});
