const htmlMenu = {
  path: 'html',
  redirect: { name: 'HTML/Introduction' },
  name: 'Menu/Html',
  meta: {
    title: 'HTML',
    doc: 'introduction'
  },
  children: [
    {
      path: 'introduction',
      name: 'HTML/Introduction',
      meta: {
        title: 'Introduction',
        doc: 'html/introduction'
      }
    },
    {
      path: 'elements',
      name: 'HTML/Elements',
      meta: {
        title: 'Elements',
        doc: 'html/elements'
      },
      children: [
        {
          path: 'elements',
          name: 'HTML/Elements/Def',
          meta: {
            title: 'Elements',
            doc: 'html/elements'
          }
        },
        {
          path: 'attributes',
          name: 'HTML/Elements/Attr',
          meta: {
            title: 'Attributes',
            doc: 'html/attributes'
          }
        },
        {
          path: 'styles',
          name: 'HTML/Elements/Styl',
          meta: {
            title: 'Styles',
            doc: 'html/attr_styl'
          }
        },
        {
          path: 'classes',
          name: 'HTML/Elements/Cls',
          meta: {
            title: 'Classes',
            doc: 'html/attr_classes'
          }
        },
        {
          path: 'id',
          name: 'HTML/Elements/Id',
          meta: {
            title: 'ID',
            doc: 'html/attr_id'
          }
        }
      ]
    },
    {
      path: 'headings',
      name: 'HTML/Headings',
      meta: {
        title: 'Headings',
        doc: 'html/headings'
      }
    },
    {
      path: 'formatting',
      name: 'HTML/Formatting',
      meta: {
        title: 'Formatting',
        doc: 'html/formatting'
      }
    },
    {
      path: 'paragraphs',
      name: 'HTML/Paragraphs',
      meta: {
        title: 'Paragraphs',
        doc: 'html/paragraphs'
      }
    },
    {
      path: 'div',
      name: 'HTML/Div',
      meta: {
        title: 'Div',
        doc: 'html/div'
      }
    },
    {
      path: 'images',
      name: 'HTML/Images',
      meta: {
        title: 'Images',
        doc: 'html/images'
      }
    },
    {
      path: 'links',
      name: 'HTML/Links',
      meta: {
        title: 'Links',
        doc: 'html/links'
      }
    },
    {
      path: 'lists',
      name: 'HTML/Lists',
      meta: {
        title: 'Lists',
        doc: 'html/lists'
      }
    },
    {
      path: 'tables',
      name: 'HTML/Tables',
      meta: {
        title: 'Tables',
        doc: 'html/tables'
      }
    }
  ]
}

export default htmlMenu
