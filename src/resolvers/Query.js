const Query = {
  example(parent, args, { db }, info) {
    return db.example;
  },
};

export default Query;
