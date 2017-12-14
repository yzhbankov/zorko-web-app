export default function () {
  return {
    visible: true,
    items: [
      {
        icon: 'list',
        component: 'item',
        title: 'Library',
        name: 'library',
        path: '/library'
      },
      {
        icon: 'bubble_chart',
        title: 'Datums',
        path: '/datums',
        component: 'item'
      },
      {
        icon: 'perm_identity',
        title: 'Account',
        path: '/account/profile',
        component: 'item'
      }
    ]
  }
}