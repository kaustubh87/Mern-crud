const Post = require("../models/post");
const slugify = require("slugify");

exports.create = function (req, res) {
  //   console.log(req.body);

  const { title, content, user } = req.body;
  const slug = slugify(title);

  //Validations for title and content

  switch (true) {
    case !title:
      return res.status(400).json({ error: "Title is required" });
      break;

    case !content:
      return res.status(400).json({ error: "Content is required" });
      break;
  }

  Post.create(
    {
      title,
      content,
      user,
      slug,
    },
    (err, post) => {
      if (err) {
        console.log(err);
        res
          .status(400)
          .json({ error: "Duplicate post. Try again with newer one" });
      }

      res.json(post);
    }
  );
};
