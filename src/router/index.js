import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetailView from '@/views/event/EventDetailView.vue'
import EventRegisterView from '@/views/event/EventRegister.vue'
import EventEditView from '@/views/event/EventEditView.vue'
import EventLayoutView from '@/views/event/EventLayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetWorkError from '@/views/NetworkErrorView.vue'
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventListView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 3
    })
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayoutView,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetailView,
        props: true
      },

      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegisterView,
        props: true
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEditView,
        props: true
      }
    ]
  },

  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFoundView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkError
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
