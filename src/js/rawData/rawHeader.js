const rawHeader = [
  {
    title: "trang chủ",
    html: "/index.html",
    active: true,
  },
  {
    title: "store",
    html: "/store.html",
  },
  {
    title: "buffet",
    html: "/buffet.html",
  },
  {
    title: "công ty",
    html: "/company.html",
  },
  {
    title: "Địa chỉ",
    html: false,
    children: [
      {
        title: "địa chỉ store",
        html: "/store-address.html",
      },
      {
        title: "địa chỉ buffet",
        html: "/buffet-address.html",
      },
    ],
  },
  {
    title: "liên hệ",
    html: "/contact.html",
  },
  {
    title: "mua hàng online",
    html: "/online-store.html",
  },
];

export default rawHeader;
