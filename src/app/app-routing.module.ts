import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: () => {
      return import('./recipes/recipes.module').then(mod => mod.RecipesModule);
    }
  },
  {
    path: 'shopping-list',
    loadChildren: () => {
      return import('./shopping-list/shopping-list.module').then(mod => mod.ShoppingListModule);
    }
  },
  {
    path: 'auth',
    loadChildren: () => {
      return import('./auth/auth.module').then(mod => mod.AuthModule);
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
