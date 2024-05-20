export default {
  name: 'product_comment',
  title: 'Product_Comment',
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
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{type: 'product'}],
    },
  ],
}
