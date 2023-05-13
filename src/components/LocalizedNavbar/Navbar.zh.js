const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT SC",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://pm.chatspace.top",
      label: "ChatGPT Shortcut 咒语库",
      position: "left",
    },
    {
      type: 'dropdown',
      label: '其他工具',
      position: 'left',
      items: [
        {
          label: "Chrome 扩展版",
          href: "https://chrome.google.com/webstore/detail/chatgpt-shortcut/blcgeoojgdpodnmnhfpohphdhfncblnj",
        },
        {
          label: '个人博客',
          href: 'https://zxh.chatspace.top/',
        },
        {
          label: '小商店',
          href: 'https://shoping.dzbz555.top/',
        },
        {
          label: '网盘收藏',
          href: 'https://wp.chatspace.top/',
        },
        {
          label: 'Find on Product Hunt',
          href: 'https://www.producthunt.com/posts/chatgpt-shortcut?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt&#0045;shortcut',
        },
      ],
    },
    {
      to: "https://www.chatdoc.link/",
      label: "在线ChatGPT聊天",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
     {
      href: "https://www.dzbz777.top/",
      position: "right",
      className: "聊天",
    },
    {
      href: "https://discord.gg/a3pTR9pe",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = zhNavbar;
