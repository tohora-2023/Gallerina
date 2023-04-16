exports.seed = async (knex) => {
  await knex('collections').insert([
    {
      id: 1,
      user_id: 1,
      title: 'My Favourites',
      cover_img:
        'https://d32dm0rphc51dk.cloudfront.net/NOpIAwQa-3r51Cg9qXKbfA/medium.jpg',
    },
    {
      id: 2,
      user_id: 2,
      title: 'My First Collection',
      cover_img:
        'https://d32dm0rphc51dk.cloudfront.net/m4X41Fun8gpDjn7Gat9cUg/medium.jpg',
    },
    {
      id: 3,
      user_id: 3,
      title: 'My Louvre',
      cover_img:
        'https://d32dm0rphc51dk.cloudfront.net/IG8ZLvVmZgQiTn2zK0Bp8w/medium.jp ',
    },
    {
      id: 4,
      user_id: 4,
      title: 'To Buy',
      cover_img:
        'https://d32dm0rphc51dk.cloudfront.net/5L1xjKC_und1uiKCpUPHhw/medium.jpg',
    },
    {
      id: 5,
      user_id: 1,
      title: 'To Buy',
      cover_img:
        'https://d32dm0rphc51dk.cloudfront.net/5L1xjKC_und1uiKCpUPHhw/medium.jpg',
    }
  ])
}
