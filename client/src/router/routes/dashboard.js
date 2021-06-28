export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/dashboard/Home.vue'),
    meta: {
      requiresAuth: true,
    },
  },
]
