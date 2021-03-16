const cssMenu = {
  path: 'css',
  redirect: { name: 'CSS/Introduction' },
  name: 'Menu/Css',
  meta: {
    title: 'CSS'
  },
  children: [
    {
      path: 'introduction',
      name: 'CSS/Introduction',
      meta: {
        title: 'Introduction',
        doc: 'css/00introduction'
      }
    },
    {
      path: 'syntax',
      name: 'CSS/Syntax',
      meta: {
        title: 'Syntax',
        doc: 'css/01syntax'
      }
    },
    {
      path: 'selectors',
      name: 'CSS/Selectors',
      meta: {
        title: 'Selectors',
        doc: 'css/02selectors'
      }
    },
    {
      path: 'howto',
      name: 'CSS/HowTo',
      meta: {
        title: 'How to',
        doc: 'css/03howto'
      }
    },
    {
      path: 'comments',
      name: 'CSS/Comments',
      meta: {
        title: 'Comments',
        doc: 'css/04comments'
      }
    },
    {
      path: 'colors',
      name: 'CSS/Colors',
      meta: {
        title: 'Colors',
        doc: 'css/05colors'
      }
    },
    {
      path: 'bg',
      name: 'CSS/Bg',
      meta: {
        title: 'Background',
        doc: 'css/06bg'
      }
    },
    {
      path: 'borders',
      name: 'CSS/Borders',
      meta: {
        title: 'Borders',
        doc: 'css/08borders'
      }
    },
    {
      path: 'margins',
      name: 'CSS/margins',
      meta: {
        title: 'Margins',
        doc: 'css/09margins'
      }
    },
    {
      path: 'paddings',
      name: 'CSS/Paddings',
      meta: {
        title: 'Paddings',
        doc: 'css/10paddings'
      }
    },
    {
      path: 'wh',
      name: 'CSS/WidthHeight',
      meta: {
        title: 'Width / Height',
        doc: 'css/11wh'
      }
    },
    {
      path: 'text',
      name: 'CSS/Text',
      meta: {
        title: 'Text'
      },
      children: [
        {
          path: 'colors',
          name: 'CSS/Text/Colors',
          meta: {
            title: 'Text Colors',
            doc: 'css/12textcolors'
          }
        },
        {
          path: 'align',
          name: 'CSS/Text/Align',
          meta: {
            title: 'Text Alignments',
            doc: 'css/13textalign'
          }
        },
        {
          path: 'transform',
          name: 'CSS/Text/Transform',
          meta: {
            title: 'Text Transform',
            doc: 'css/14texttransform'
          }
        },
        {
          path: 'deco',
          name: 'CSS/Text/Deco',
          meta: {
            title: 'Text Decoration',
            doc: 'css/15textdeco'
          }
        }
      ]
    },
    {
      path: 'fonts',
      name: 'CSS/Fonts',
      meta: {
        title: 'Fonts',
        doc: 'css/16fonts'
      }
    },
    {
      path: 'display',
      name: 'CSS/Display',
      meta: {
        title: 'Display',
        doc: 'css/17display'
      }
    },
    {
      path: 'position',
      name: 'CSS/Position',
      meta: {
        title: 'Position',
        doc: 'css/18position'
      }
    },
    {
      path: 'overflow',
      name: 'CSS/Overflow',
      meta: {
        title: 'Overflow',
        doc: 'css/19overflow'
      }
    }
  ]
}

export default cssMenu
