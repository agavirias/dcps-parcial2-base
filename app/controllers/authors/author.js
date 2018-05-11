import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        delete(post){
            const answer = confirm('is correct?');
            if (answer){
                post.deleteRecord();
                post.get('IS DELETE')
                post.save();
                alert('Se ha borrado exitoxamiente')

            }
        }
    }
});
