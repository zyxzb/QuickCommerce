export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Meta title',
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'titleImage',
      type: 'string',
      title: 'Alt Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
  ],
}
