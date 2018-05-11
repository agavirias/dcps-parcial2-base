import DS from 'ember-data';

export default DS.Model.extend({

    firstName: DS.attr('String'),
    lastName: DS.attr('String'),
    profilePicture: DS.attr('String'),
    email: DS.attr('string'),
    username: DS.attr('String'),

    post: DS.hasMany('blog-spot'),
    
});
