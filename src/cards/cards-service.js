const CardsService = {

  creatShoe(db, newComment) {
    return db
      .insert(newComment)
      .into('blogful_comments')
      .returning('*')
      .then(([comment]) => comment)
      .then(comment =>
        CommentsService.getById(db, comment.id)
      )
  },

}

module.exports = CardsService