export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'blog',
      title: 'Post',
      type: 'reference',
      to: [{type: 'blog'}],
    },
  ],
}
