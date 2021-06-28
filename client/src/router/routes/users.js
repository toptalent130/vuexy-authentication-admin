export default [
    {
        path: '/apps/users/list',
        name: 'apps-users-list',
        component: () => import('@/views/apps/user/users-list/UsersList.vue'),
    },
    {
        path: '/apps/users/view/:id',
        name: 'apps-users-view',
        component: () => import('@/views/apps/user/users-view/UsersView.vue'),
    },
    {
        path: '/apps/users/edit/:id',
        name: 'apps-users-edit',
        component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
    },
        // Invoice
    {
        path: '/apps/invoice/list',
        name: 'apps-invoice-list',
        component: () => import('@/views/apps/invoice/invoice-list/InvoiceList.vue'),
    },
    {
        path: '/apps/invoice/preview/:id',
        name: 'apps-invoice-preview',
        component: () => import('@/views/apps/invoice/invoice-preview/InvoicePreview.vue'),
    },
    {
        path: '/apps/invoice/add/',
        name: 'apps-invoice-add',
        component: () => import('@/views/apps/invoice/invoice-add/InvoiceAdd.vue'),
    },
    {
        path: '/apps/invoice/edit/:id',
        name: 'apps-invoice-edit',
        component: () => import('@/views/apps/invoice/invoice-edit/InvoiceEdit.vue'),
    },
]