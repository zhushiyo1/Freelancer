export default [
  {
    path: "/user/data",
    name: "PersonalData",
    meta: {
      title: "Personal Data",
      keepAlive: true,
      auth: false
    },
    component: () => import("@views/account/accountData/PersonalData.vue")
  }
];
