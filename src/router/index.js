import Library from '@/components/Library'
import Explore from '@/components/Explore'
import Model from '@/components/Model'
import ModelDocumentation from '@/components/ModelDocumentation'
import ModelDefinition from '@/components/ModelDefinition'
import ModelView from '@/components/ModelView'
import Admin from '@/components/Admin'
import Connection from '@/components/Connection'
import AccountProfile from '@/components/AccountProfile'
import AccountRepositories from '@/components/AccountRepositories'
import Look from '@/components/Look'

console.log('uuuu')

export default {
  routes: [
    {
      path: '/library',
      component: Library
    },
    {
      path: '/looks/:id',
      component: Look
    },
    {
      path: '/explore/:id',
      component: Explore
    },
    {
      path: '/model/:id',
      component: Model,
      children: [{
        path: '/model/:id/docs/:docId',
        component: ModelDocumentation
      }, {
        path: '/model/:id/definitions/:definitionId',
        component: ModelDefinition
      }, {
        path: '/model/:id/views/:viewId',
        component: ModelView
      }]
    },
    {
      path: '/model/:id/models/:modelId',
      component: Model
    },
    {
      path: '/model/:id/views/:viewId',
      component: Model
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/admin/connections',
      component: Connection
    },
    {
      path: '/account/profile',
      component: AccountProfile
    },
    {
      path: '/account/repositories',
      component: AccountRepositories
    },
    {
      path: '/library',
      component: Library
    },
    {
      path: '/',
      redirect: '/library'
    }
  ]
}
