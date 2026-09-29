/* global CMS, createClass, h */

CMS.registerPreviewStyle('/admin/home-preview.css')

CMS.registerPreviewTemplate('home', createClass({
  render() {
    const title = this.props.entry.getIn(['data', 'title']) || 'Hi I\'m Jay,'
    const spacing = this.props.entry.getIn(['data', 'spacing']) || 'standard'
    const headerItems = [
      h('img', { src: '/toad-icon.png', alt: 'Jay Hou logo' }),
      h('span', {}, 'Writing'),
      h('span', {}, 'Gallery'),
      h('span', {}, 'Mental Models'),
    ]
    const articleItems = [
      h('h1', {}, title),
      h('div', { className: `home-preview-body home-preview-body--${spacing}` }, this.props.widgetFor('body')),
      h('hr', {}),
      h('p', {}, 'Find me on'),
      h('p', { className: 'home-preview-social' }, '𝕏  Twitter     ▣  LinkedIn'),
      h('p', {}, 'Reach me at ', h('u', {}, 'jayhaswords@gmail.com'), ' - I would love to hear your lore. Suggest me new places to move to.'),
    ]
    const header = h('header', { className: 'home-preview-header' }, ...headerItems)
    const article = h('article', { className: 'home-preview-prose' }, ...articleItems)
    const main = h('main', { className: 'home-preview-main' }, article)

    return h('div', { className: 'home-preview' }, header, main)
  },
}))
