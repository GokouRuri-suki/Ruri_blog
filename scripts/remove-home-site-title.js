/* 移除首页页头的 h1#site-title（不输出「首页」大标题元素） */
hexo.extend.filter.register('after_render:html', function (html) {
  return html.replace(
    /(<div id="site-info">)\s*<h1 id="site-title">[\s\S]*?<\/h1>/g,
    '$1'
  )
})
